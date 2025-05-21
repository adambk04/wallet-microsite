package com.los.api.service;

import org.apache.poi.ss.usermodel.*;
import org.apache.poi.xssf.streaming.SXSSFSheet;
import org.apache.poi.xssf.streaming.SXSSFWorkbook;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;
import com.los.api.repository.ReportRepository;

import java.io.FileOutputStream;
import java.io.IOException;
import java.nio.file.Paths;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.Date;
import java.util.List;
import java.util.Map;

@Component
public class SchedulingConfig {
	
	private static final Logger LOGGER = LoggerFactory.getLogger(SchedulingConfig.class);

    @Value("${report.file.path}")
    private String reportFilePath;
    
    @Value("#{'${email.recipients}'.split(',')}")
    private List<String> emailRecipients;

    @Autowired
    private ReportRepository reportRepository;
    
    @Autowired
    private EmailService emailService;

    @Value("${scheduled.task.cron.1}")
    private String cronExpression1;

    @Value("${scheduled.task.cron.2}")
    private String cronExpression2;

    // Scheduler to run at 18:00
    @Scheduled(cron = "${scheduled.task.cron.1}")
    public void exportDataToExcelAt18() {
        LOGGER.info("Running scheduled task at 12:00");
        //PROD FILE NAME
        // exportDataToExcel("OCRDailyReport_12pm_");
        //UAT FILE NAME
        exportDataToExcel("OCRDailyReport_UAT_12pm_");
    }

    // Scheduler to run at 12:00
    @Scheduled(cron = "${scheduled.task.cron.2}")
    public void exportDataToExcelAt12() {
        LOGGER.info("Running scheduled task at 18:00");
        //PROD FILE NAME
        // exportDataToExcel("OCRDailyReport_6pm_");
        //UAT FILE NAME
        exportDataToExcel("OCRDailyReport_UAT_6pm_");
    }

    @SuppressWarnings("resource")
	private void exportDataToExcel(String fileNamePrefix) {
        LOGGER.info("Starting Report Generation Process");

        List<Map<String, Object>> data = reportRepository.getReportData();
        LOGGER.info("Data Queried");

        String todayDate = LocalDate.now().format(DateTimeFormatter.ofPattern("yyyyMMdd"));
        String todayDateFormat2 = LocalDate.now().format(DateTimeFormatter.ofPattern("ddMMyyyy"));

        String fileName = fileNamePrefix + todayDate + ".xlsx";
        String filePath = Paths.get(reportFilePath, fileName).toString();

        SXSSFWorkbook workbook = null;  // Declare the workbook outside the try block

        try {
            workbook = new SXSSFWorkbook();  // Initialize the workbook inside the try block
            FileOutputStream fileOut = new FileOutputStream(filePath);

            LOGGER.info("Starting writing workbook");

            Sheet sheet = workbook.createSheet("Data");

            // Create header row
            Row headerRow = sheet.createRow(0);
            
            //PROD HEADER
//            String[] headers = {
//        	    "latest_jpo_id", "latest_jpo_client_transactionid", "latest_jpo_status", "latest_jpo_request_date", "latest_jpo_response_date", "latest_jpo_service", "latest_jpo_caseid", "latest_jpo_documenttype", 
//        	    "earliest_jpo_id", "earliest_jpo_client_transactionid", "earliest_jpo_status", "earliest_jpo_request_date", "earliest_jpo_response_date", "earliest_jpo_service", "earliest_jpo_caseid", "earliest_jpo_documenttype", 
//        	    "ocr_status", "application_status", "applydate", "appno", "region", "orgdesc", "product", "product_name", "perfios_trx_id", "C_OCR", "occupation_status", "judgment_date", "sla_time", "sla_time_download_report" , "Judge_OCR_Completed"
//        	};
            
            //UAT HEADER
            String[] headers = {
        	    "latest_jpo_id", "latest_jpo_client_transactionid", "latest_jpo_status", "latest_jpo_request_date", "latest_jpo_response_date", "latest_jpo_service", "latest_jpo_caseid", "latest_jpo_documenttype", "employment_type", "error_description", 
        	    "earliest_jpo_id", "earliest_jpo_client_transactionid", "earliest_jpo_status", "earliest_jpo_request_date", "earliest_jpo_response_date", "earliest_jpo_service", "earliest_jpo_caseid", "earliest_jpo_documenttype", 
        	    "ocr_status", "application_status", "applydate", "appno", "region", "orgdesc", "product", "product_name", "perfios_trx_id", "C_OCR", "occupation_status", "judgment_date", "sla_time", "sla_time_download_report" , "Judge_OCR_Completed"
        	};
            
            CreationHelper createHelper = workbook.getCreationHelper();
            CellStyle dateStyle = workbook.createCellStyle();
            dateStyle.setDataFormat(createHelper.createDataFormat().getFormat("yyyy-mm-dd hh:mm:ss"));

        	for (int i = 0; i < headers.length; i++) {
        	    headerRow.createCell(i).setCellValue(headers[i]);
        	}

        	int rowIndex = 1;
        	for (Map<String, Object> rowData : data) {
        	    Row row = sheet.createRow(rowIndex++);
        	    for (int i = 0; i < headers.length; i++) {
        	        Cell cell = row.createCell(i);
        	        Object value = rowData.get(headers[i]);
        	        if (value instanceof String) {
        	            cell.setCellValue((String) value);
        	        } else if (value instanceof Number) {
        	            cell.setCellValue(((Number) value).doubleValue());
        	        } else if (value instanceof java.sql.Date || value instanceof java.util.Date) {
        	            cell.setCellValue((Date) value);
        	            cell.setCellStyle(dateStyle);
        	        } else {
        	            cell.setCellValue(value != null ? value.toString() : "");
        	        }
        	    }

        	    if (rowIndex % 100 == 0) {
        	        ((SXSSFSheet) sheet).flushRows(100);
        	    }
        	}

            workbook.write(fileOut);
            LOGGER.info("Successfully write workbook to : " + filePath);

            emailService.sendEmailWithAttachment(
                "LOS3.0 - OCR Status SLA Respond Time Report [PRODUCTION] as at " + todayDateFormat2,
                "Please find the attached report.",
                filePath
            );
            LOGGER.info("Successfully sent email");

        } catch (IOException e) {
            LOGGER.error("Failed to export data to Excel", e);
            throw new RuntimeException("Failed to export data to Excel", e);
        } finally {
            if (workbook != null) {
                workbook.dispose();  // Dispose of temporary files backing this workbook on disk
            }
        }
    }

    
}
