package com.los.api.repository;

import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Map;

@Repository
public class ReportRepository {

    private final JdbcTemplate jdbcTemplate;

    public ReportRepository(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    //PROD QUERY
//    public List<Map<String, Object>> getReportData() {
//    	String query =
//    		    "SELECT " +
//    		    "    a.jpo_id AS latest_jpo_id, " +
//    		    "    a.jpo_client_transactionid AS latest_jpo_client_transactionid, " +
//    		    "    a.jpo_status AS latest_jpo_status, " +
//    		    "    a.jpo_request_date AS latest_jpo_request_date, " +
//    		    "    a.jpo_response_date AS latest_jpo_response_date, " +
//    		    "    a.jpo_service AS latest_jpo_service, " +
//    		    "    a.jpo_caseid AS latest_jpo_caseid, " +
//    		    "    a.jpo_documenttype AS latest_jpo_documenttype, " +
//    		    "    b.jpo_id AS earliest_jpo_id, " +
//    		    "    b.jpo_client_transactionid AS earliest_jpo_client_transactionid, " +
//    		    "    b.jpo_status AS earliest_jpo_status, " +
//    		    "    b.jpo_request_date AS earliest_jpo_request_date, " +
//    		    "    b.jpo_response_date AS earliest_jpo_response_date, " +
//    		    "    b.jpo_service AS earliest_jpo_service, " +
//    		    "    b.jpo_caseid AS earliest_jpo_caseid, " +
//    		    "    b.jpo_documenttype AS earliest_jpo_documenttype, " +
//    		    "    CASE ocr_status " +
//    		    "        WHEN 'P' THEN 'Initiated' " +
//    		    "        WHEN 'F' THEN 'Report Failed' " +
//    		    "        WHEN 'N' THEN 'Pending Notification' " +
//    		    "        WHEN 'C' THEN 'Completed' " +
//    		    "        WHEN 'E' THEN 'Error' " +
//    		    "    END AS ocr_status, " +
//    		    "    c_status AS application_status, " +
//    		    "    c_app_date AS applydate, " +
//    		    "    c_appno AS appno, " +
//    		    "    c_region AS region, " +
//    		    "    orgdesc, " +
//    		    "    c_product_type AS product, " +
//    		    "    PROD_NAME AS product_name, " +
//    		    "    NVL(ocr_filename, ' ') AS perfios_trx_id, " +
//    		    "    oc.C_OCR, " +
//    		    "    CASE co.CO_OCCUPATION " +
//    		    "        WHEN '0' THEN 'EMPLOYED' " +
//    		    "        WHEN '1' THEN 'SELF-EMPLOYED' " +
//    		    "        ELSE 'UNKNOWN' " +
//    		    "    END AS occupation_status, " +
//    		    
//    		    "    CASE c_status " +
//    		    "        WHEN 'AAA_APPROVED' THEN c_approval_date " +
//    		    "        WHEN 'ACCEPTED' THEN c_approval_date " +
//    		    "        WHEN 'APPROVED' THEN c_approval_date " +
//    		    "        WHEN 'AUTOAPPROVED' THEN c_approval_date " +
//    		    "        WHEN 'CUS_CANCL' THEN c_approval_date " +
//    		    "        WHEN 'CANCELLED' THEN c_cancel_date " +
//    		    "        WHEN 'DECLINED' THEN c_decline_date " +
//    		    "        ELSE NULL " +
//    		    "    END AS judgment_date, " +
//    		    "    LPAD(FLOOR(a.jpo_response_date - b.jpo_response_date), 2, '0') || ':' || " +
//    		    "    LPAD(FLOOR(MOD((a.jpo_response_date - b.jpo_response_date) * 24, 24)), 2, '0') || ':' || " +
//    		    "    LPAD(FLOOR(MOD((a.jpo_response_date - b.jpo_response_date) * 24 * 60, 60)), 2, '0') || ':' || " +
//    		    "    LPAD(FLOOR(MOD((a.jpo_response_date - b.jpo_response_date) * 24 * 60 * 60, 60)), 2, '0') AS sla_time, " +
//    		    
//			    "    CASE " +
//			    "        WHEN ROW_NUMBER() OVER (PARTITION BY a.jpo_caseid ORDER BY a.jpo_id DESC) = 1 AND a.jpo_service = 'DownloadReport' THEN " +
//			    "            LPAD(FLOOR(a.jpo_response_date - b.jpo_request_date), 2, '0') || ':' || " +
//			    "            LPAD(FLOOR(MOD((a.jpo_response_date - b.jpo_request_date) * 24, 24)), 2, '0') || ':' || " +
//			    "            LPAD(FLOOR(MOD((a.jpo_response_date - b.jpo_request_date) * 24 * 60, 60)), 2, '0') || ':' || " +
//			    "            LPAD(FLOOR(MOD((a.jpo_response_date - b.jpo_request_date) * 24 * 60 * 60, 60)), 2, '0') " +
//			    "        ELSE NULL " +
//			    "    END AS sla_time_download_report, " +
//    		    
//    		    "    LPAD(FLOOR(( " +
//    		    "        CASE c_status " +
//    		    "            WHEN 'AAA_APPROVED' THEN c_approval_date " +
//    		    "            WHEN 'ACCEPTED' THEN c_approval_date " +
//    		    "            WHEN 'APPROVED' THEN c_approval_date " +
//    		    "            WHEN 'AUTOAPPROVED' THEN c_approval_date " +
//    		    "            WHEN 'CUS_CANCL' THEN c_approval_date " +
//    		    "            WHEN 'CANCELLED' THEN c_cancel_date " +
//    		    "            WHEN 'DECLINED' THEN c_decline_date " +
//    		    "            ELSE NULL " +
//    		    "        END - a.jpo_response_date " +
//    		    "    )), 2, '0') || ':' || " +
//    		    "    LPAD(FLOOR(MOD(( " +
//    		    "        CASE c_status " +
//    		    "            WHEN 'AAA_APPROVED' THEN c_approval_date " +
//    		    "            WHEN 'ACCEPTED' THEN c_approval_date " +
//    		    "            WHEN 'APPROVED' THEN c_approval_date " +
//    		    "            WHEN 'AUTOAPPROVED' THEN c_approval_date " +
//    		    "            WHEN 'CUS_CANCL' THEN c_approval_date " +
//    		    "            WHEN 'CANCELLED' THEN c_cancel_date " +
//    		    "            WHEN 'DECLINED' THEN c_decline_date " +
//    		    "            ELSE NULL " +
//    		    "        END - a.jpo_response_date " +
//    		    ") * 24, 24)), 2, '0') || ':' || " +
//    		    "    LPAD(FLOOR(MOD(( " +
//    		    "        CASE c_status " +
//    		    "            WHEN 'AAA_APPROVED' THEN c_approval_date " +
//    		    "            WHEN 'ACCEPTED' THEN c_approval_date " +
//    		    "            WHEN 'APPROVED' THEN c_approval_date " +
//    		    "            WHEN 'AUTOAPPROVED' THEN c_approval_date " +
//    		    "            WHEN 'CUS_CANCL' THEN c_approval_date " +
//    		    "            WHEN 'CANCELLED' THEN c_cancel_date " +
//    		    "            WHEN 'DECLINED' THEN c_decline_date " +
//    		    "            ELSE NULL " +
//    		    "        END - a.jpo_response_date " +
//    		    ") * 24 * 60, 60)), 2, '0') || ':' || " +
//    		    "    LPAD(FLOOR(MOD(( " +
//    		    "        CASE c_status " +
//    		    "            WHEN 'AAA_APPROVED' THEN c_approval_date " +
//    		    "            WHEN 'ACCEPTED' THEN c_approval_date " +
//    		    "            WHEN 'APPROVED' THEN c_approval_date " +
//    		    "            WHEN 'AUTOAPPROVED' THEN c_approval_date " +
//    		    "            WHEN 'CUS_CANCL' THEN c_approval_date " +
//    		    "            WHEN 'CANCELLED' THEN c_cancel_date " +
//    		    "            WHEN 'DECLINED' THEN c_decline_date " +
//    		    "            ELSE NULL " +
//    		    "        END - a.jpo_response_date " +
//    		    ") * 24 * 60 * 60, 60)), 2, '0') AS Judge_OCR_Completed " +
//    		    
//    		    "FROM jom.orcase oc " +
//    		    "LEFT JOIN jom.orocr ON TO_CHAR(oc.c_id) = TO_CHAR(ocr_cid) " +
//    		    "LEFT JOIN ( " +
//    		    "    SELECT jpo_id, jpo_client_transactionid, jpo_status, jpo_request_date, jpo_response_date, " +
//    		    "           jpo_service, jpo_caseid, jpo_documenttype, " +
//    		    "           ROW_NUMBER() OVER (PARTITION BY jpo_client_transactionid ORDER BY jpo_request_date DESC) AS row_num " +
//    		    "    FROM jom.jperfios_ocr " +
//    		    ") a ON TO_CHAR(oc.c_id) = TO_CHAR(a.jpo_caseid) AND a.row_num = 1 " +
//    		    "LEFT JOIN ( " +
//    		    "    SELECT jpo_id, jpo_client_transactionid, jpo_status, jpo_request_date, jpo_response_date, " +
//    		    "           jpo_service, jpo_caseid, jpo_documenttype, " +
//    		    "           ROW_NUMBER() OVER (PARTITION BY jpo_client_transactionid ORDER BY jpo_request_date ASC) AS row_num " +
//    		    "    FROM jom.jperfios_ocr " +
//    		    ") b ON TO_CHAR(oc.c_id) = TO_CHAR(b.jpo_caseid) AND b.row_num = 1 " +
//    		    
//    		    
//				"LEFT JOIN ( " +
//				"    SELECT jpo_id, jpo_client_transactionid, jpo_status, jpo_request_date, jpo_response_date, " +
//				"           jpo_service, jpo_caseid, jpo_documenttype, " +
//				"           ROW_NUMBER() OVER (PARTITION BY jpo_client_transactionid ORDER BY jpo_request_date DESC) AS row_num, " +
//				"           ROW_NUMBER() OVER (PARTITION BY jpo_caseid ORDER BY jpo_id DESC) AS download_row_num " +
//				"    FROM jom.jperfios_ocr " +
//				") a ON TO_CHAR(oc.c_id) = TO_CHAR(a.jpo_caseid) AND a.row_num = 1 " +
//
//    		    
//    		    "LEFT JOIN ( " +
//    		    "    SELECT DISTINCT cat_case_id, SUBSTR(cat_filename, 1, INSTR(cat_filename, '.') - 1) AS ocr_filename " +
//    		    "    FROM jh_case_attachment WHERE cat_ocr_status = 'D' " +
//    		    ") c ON TO_CHAR(c.cat_case_id) = TO_CHAR(a.jpo_caseid) " +
//    		    "LEFT JOIN jom.orrole r ON oc.c_id = r.r_c_id " +
//    		    "LEFT JOIN jom.orcontact co ON r.r_co_id = co.co_id " +
//    		    "JOIN ( " +
//    		    "    SELECT org_code, org_name || ' (' || org_code || ')' AS orgdesc " +
//    		    "    FROM vw_jorg_tree " +
//    		    "    WHERE org_code IN (SELECT orgcode FROM lens_users) " +
//    		    ") ON org_code = c_curr_org " +
//    		    "JOIN kbproduct ON c_prod_cd = prod_code " +
//    		    "WHERE ( " +
//    		    "    TRUNC(c_app_date, 'MM') = TRUNC(ADD_MONTHS(SYSDATE, -1), 'MM') " +
//    		    "    OR (TRUNC(c_app_date, 'MM') = TRUNC(SYSDATE, 'MM') AND c_app_date <= SYSDATE) " +
//    		    ") " +
//    		    "ORDER BY latest_jpo_request_date ";
////	    		"ORDER BY latest_jpo_request_date FETCH FIRST 100 ROWS ONLY";
//
//
//        return jdbcTemplate.queryForList(query);
//    }
    
    
    //UAT U5 QUERY
    public List<Map<String, Object>> getReportData() {
    	String query =
    		    "SELECT " +
    		    "    a.jpo_id AS latest_jpo_id, " +
    		    "    a.jpo_client_transactionid AS latest_jpo_client_transactionid, " +
    		    "    a.jpo_status AS latest_jpo_status, " +
    		    "    a.jpo_request_date AS latest_jpo_request_date, " +
    		    "    a.jpo_response_date AS latest_jpo_response_date, " +
    		    "    a.jpo_service AS latest_jpo_service, " +
    		    "    a.jpo_caseid AS latest_jpo_caseid, " +
    		    "    a.jpo_documenttype AS latest_jpo_documenttype, " +
    		    "    a.jpo_employmenttype AS employment_type, " +
    		    "    a.jpo_error_desc AS error_description, " +
    		    "    b.jpo_id AS earliest_jpo_id, " +
    		    "    b.jpo_client_transactionid AS earliest_jpo_client_transactionid, " +
    		    "    b.jpo_status AS earliest_jpo_status, " +
    		    "    b.jpo_request_date AS earliest_jpo_request_date, " +
    		    "    b.jpo_response_date AS earliest_jpo_response_date, " +
    		    "    b.jpo_service AS earliest_jpo_service, " +
    		    "    b.jpo_caseid AS earliest_jpo_caseid, " +
    		    "    b.jpo_documenttype AS earliest_jpo_documenttype, " +
    		    "    CASE ocr_status " +
    		    "        WHEN 'P' THEN 'Initiated' " +
    		    "        WHEN 'F' THEN 'Report Failed' " +
    		    "        WHEN 'N' THEN 'Pending Notification' " +
    		    "        WHEN 'C' THEN 'Completed' " +
    		    "        WHEN 'E' THEN 'Error' " +
    		    "    END AS ocr_status, " +
    		    "    c_status AS application_status, " +
    		    "    c_app_date AS applydate, " +
    		    "    c_appno AS appno, " +
    		    "    c_region AS region, " +
    		    "    orgdesc, " +
    		    "    c_product_type AS product, " +
    		    "    PROD_NAME AS product_name, " +
    		    "    NVL(ocr_filename, ' ') AS perfios_trx_id, " +
    		    "    oc.C_OCR, " +
    		    "    CASE co.CO_OCCUPATION " +
    		    "        WHEN '0' THEN 'EMPLOYED' " +
    		    "        WHEN '1' THEN 'SELF-EMPLOYED' " +
    		    "        ELSE 'UNKNOWN' " +
    		    "    END AS occupation_status, " +
    		    
    		    "    CASE c_status " +
    		    "        WHEN 'AAA_APPROVED' THEN c_approval_date " +
    		    "        WHEN 'ACCEPTED' THEN c_approval_date " +
    		    "        WHEN 'APPROVED' THEN c_approval_date " +
    		    "        WHEN 'AUTOAPPROVED' THEN c_approval_date " +
    		    "        WHEN 'CUS_CANCL' THEN c_approval_date " +
    		    "        WHEN 'CANCELLED' THEN c_cancel_date " +
    		    "        WHEN 'DECLINED' THEN c_decline_date " +
    		    "        ELSE NULL " +
    		    "    END AS judgment_date, " +
    		    "    LPAD(FLOOR(a.jpo_response_date - b.jpo_response_date), 2, '0') || ':' || " +
    		    "    LPAD(FLOOR(MOD((a.jpo_response_date - b.jpo_response_date) * 24, 24)), 2, '0') || ':' || " +
    		    "    LPAD(FLOOR(MOD((a.jpo_response_date - b.jpo_response_date) * 24 * 60, 60)), 2, '0') || ':' || " +
    		    "    LPAD(FLOOR(MOD((a.jpo_response_date - b.jpo_response_date) * 24 * 60 * 60, 60)), 2, '0') AS sla_time, " +
    		    
			    "    CASE " +
			    "        WHEN ROW_NUMBER() OVER (PARTITION BY a.jpo_caseid ORDER BY a.jpo_id DESC) = 1 AND a.jpo_service = 'DownloadReport' THEN " +
			    "            LPAD(FLOOR(a.jpo_response_date - b.jpo_request_date), 2, '0') || ':' || " +
			    "            LPAD(FLOOR(MOD((a.jpo_response_date - b.jpo_request_date) * 24, 24)), 2, '0') || ':' || " +
			    "            LPAD(FLOOR(MOD((a.jpo_response_date - b.jpo_request_date) * 24 * 60, 60)), 2, '0') || ':' || " +
			    "            LPAD(FLOOR(MOD((a.jpo_response_date - b.jpo_request_date) * 24 * 60 * 60, 60)), 2, '0') " +
			    "        ELSE NULL " +
			    "    END AS sla_time_download_report, " +
    		    
    		    "    LPAD(FLOOR(( " +
    		    "        CASE c_status " +
    		    "            WHEN 'AAA_APPROVED' THEN c_approval_date " +
    		    "            WHEN 'ACCEPTED' THEN c_approval_date " +
    		    "            WHEN 'APPROVED' THEN c_approval_date " +
    		    "            WHEN 'AUTOAPPROVED' THEN c_approval_date " +
    		    "            WHEN 'CUS_CANCL' THEN c_approval_date " +
    		    "            WHEN 'CANCELLED' THEN c_cancel_date " +
    		    "            WHEN 'DECLINED' THEN c_decline_date " +
    		    "            ELSE NULL " +
    		    "        END - a.jpo_response_date " +
    		    "    )), 2, '0') || ':' || " +
    		    "    LPAD(FLOOR(MOD(( " +
    		    "        CASE c_status " +
    		    "            WHEN 'AAA_APPROVED' THEN c_approval_date " +
    		    "            WHEN 'ACCEPTED' THEN c_approval_date " +
    		    "            WHEN 'APPROVED' THEN c_approval_date " +
    		    "            WHEN 'AUTOAPPROVED' THEN c_approval_date " +
    		    "            WHEN 'CUS_CANCL' THEN c_approval_date " +
    		    "            WHEN 'CANCELLED' THEN c_cancel_date " +
    		    "            WHEN 'DECLINED' THEN c_decline_date " +
    		    "            ELSE NULL " +
    		    "        END - a.jpo_response_date " +
    		    ") * 24, 24)), 2, '0') || ':' || " +
    		    "    LPAD(FLOOR(MOD(( " +
    		    "        CASE c_status " +
    		    "            WHEN 'AAA_APPROVED' THEN c_approval_date " +
    		    "            WHEN 'ACCEPTED' THEN c_approval_date " +
    		    "            WHEN 'APPROVED' THEN c_approval_date " +
    		    "            WHEN 'AUTOAPPROVED' THEN c_approval_date " +
    		    "            WHEN 'CUS_CANCL' THEN c_approval_date " +
    		    "            WHEN 'CANCELLED' THEN c_cancel_date " +
    		    "            WHEN 'DECLINED' THEN c_decline_date " +
    		    "            ELSE NULL " +
    		    "        END - a.jpo_response_date " +
    		    ") * 24 * 60, 60)), 2, '0') || ':' || " +
    		    "    LPAD(FLOOR(MOD(( " +
    		    "        CASE c_status " +
    		    "            WHEN 'AAA_APPROVED' THEN c_approval_date " +
    		    "            WHEN 'ACCEPTED' THEN c_approval_date " +
    		    "            WHEN 'APPROVED' THEN c_approval_date " +
    		    "            WHEN 'AUTOAPPROVED' THEN c_approval_date " +
    		    "            WHEN 'CUS_CANCL' THEN c_approval_date " +
    		    "            WHEN 'CANCELLED' THEN c_cancel_date " +
    		    "            WHEN 'DECLINED' THEN c_decline_date " +
    		    "            ELSE NULL " +
    		    "        END - a.jpo_response_date " +
    		    ") * 24 * 60 * 60, 60)), 2, '0') AS Judge_OCR_Completed " +
    		    
    		    "FROM jom.orcase oc " +
    		    "LEFT JOIN jom.orocr ON TO_CHAR(oc.c_id) = TO_CHAR(ocr_cid) " +
    		    "LEFT JOIN ( " +
    		    "    SELECT jpo_id, jpo_client_transactionid, jpo_status, jpo_request_date, jpo_response_date, " +
    		    "           jpo_service, jpo_caseid, jpo_documenttype, jpo_employmenttype, jpo_error_desc, " +
    		    "           ROW_NUMBER() OVER (PARTITION BY jpo_client_transactionid ORDER BY jpo_request_date DESC) AS row_num " +
    		    "    FROM jom.jperfios_ocr " +
    		    ") a ON TO_CHAR(oc.c_id) = TO_CHAR(a.jpo_caseid) AND a.row_num = 1 " +
    		    "LEFT JOIN ( " +
    		    "    SELECT jpo_id, jpo_client_transactionid, jpo_status, jpo_request_date, jpo_response_date, " +
    		    "           jpo_service, jpo_caseid, jpo_documenttype,jpo_employmenttype, jpo_error_desc, " +
    		    "           ROW_NUMBER() OVER (PARTITION BY jpo_client_transactionid ORDER BY jpo_request_date ASC) AS row_num " +
    		    "    FROM jom.jperfios_ocr " +
    		    ") b ON TO_CHAR(oc.c_id) = TO_CHAR(b.jpo_caseid) AND b.row_num = 1 " +
    		    
    		    
				"LEFT JOIN ( " +
				"    SELECT jpo_id, jpo_client_transactionid, jpo_status, jpo_request_date, jpo_response_date, " +
				"           jpo_service, jpo_caseid, jpo_documenttype, jpo_employmenttype, jpo_error_desc, " +
				"           ROW_NUMBER() OVER (PARTITION BY jpo_client_transactionid ORDER BY jpo_request_date DESC) AS row_num, " +
				"           ROW_NUMBER() OVER (PARTITION BY jpo_caseid ORDER BY jpo_id DESC) AS download_row_num " +
				"    FROM jom.jperfios_ocr " +
				") a ON TO_CHAR(oc.c_id) = TO_CHAR(a.jpo_caseid) AND a.row_num = 1 " +

    		    
    		    "LEFT JOIN ( " +
    		    "    SELECT DISTINCT cat_case_id, SUBSTR(cat_filename, 1, INSTR(cat_filename, '.') - 1) AS ocr_filename " +
    		    "    FROM jh_case_attachment WHERE cat_ocr_status = 'D' " +
    		    ") c ON TO_CHAR(c.cat_case_id) = TO_CHAR(a.jpo_caseid) " +
    		    "LEFT JOIN jom.orrole r ON oc.c_id = r.r_c_id " +
    		    "LEFT JOIN jom.orcontact co ON r.r_co_id = co.co_id " +
    		    "JOIN ( " +
    		    "    SELECT org_code, org_name || ' (' || org_code || ')' AS orgdesc " +
    		    "    FROM vw_jorg_tree " +
    		    "    WHERE org_code IN (SELECT orgcode FROM lens_users) " +
    		    ") ON org_code = c_curr_org " +
    		    "JOIN kbproduct ON c_prod_cd = prod_code " +
    		    "WHERE ( " +
    		    "    TRUNC(c_app_date, 'MM') = TRUNC(ADD_MONTHS(SYSDATE, -1), 'MM') " +
    		    "    OR (TRUNC(c_app_date, 'MM') = TRUNC(SYSDATE, 'MM') AND c_app_date <= SYSDATE) " +
    		    ") " +
    		    "ORDER BY latest_jpo_request_date ";
//	    		"ORDER BY latest_jpo_request_date FETCH FIRST 100 ROWS ONLY";


        return jdbcTemplate.queryForList(query);
    }
}

