package com.los.api.service;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.FileSystemResource;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;

import java.io.File;

@Service
public class EmailService {

	private static final Logger LOGGER = LoggerFactory.getLogger(EmailService.class);

    @Value("${email.sender}")
    private String sender;

    @Value("${email.recipients}")
    private String recipients;
    
    @Value("${email.ccs}")
    private String ccs;

    public EmailService(JavaMailSender mailSender) {
        this.mailSender = mailSender;
    }
    
    @Autowired
    private JavaMailSender mailSender;

    public void sendEmailWithAttachment(String subject, String text, String pathToAttachment){
        MimeMessage mimeMessage = mailSender.createMimeMessage();

        try {
        	
	        MimeMessageHelper mimeMessageHelper = new MimeMessageHelper(mimeMessage, true);
	        mimeMessageHelper.setFrom(sender);
	        
	        // Set multiple recipients
	        String[] recipientList = recipients.split(",");
	        mimeMessageHelper.setTo(recipientList);
	        
	        // Set multiple ccs
	        String[] ccList = ccs.split(",");
	        mimeMessageHelper.setCc(ccList);
	        
	        mimeMessageHelper.setSubject(subject);
	        mimeMessageHelper.setText(text);
	
	        // Add attachment if provided
	        if (pathToAttachment != null) {
	            FileSystemResource file = new FileSystemResource(new File(pathToAttachment));
	            mimeMessageHelper.addAttachment(file.getFilename(), file);
	        }
	
	        mailSender.send(mimeMessage);
	        
        } catch (MessagingException e) {
        	e.printStackTrace();
        	LOGGER.error("Failed to send email: " + e.getMessage());
        }
    }
}

