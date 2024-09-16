package com.commanproject.crm.entity;

import java.util.Date;

import com.fasterxml.jackson.annotation.JsonFormat;

public class CustomerDTO {
    private String emailId;
    private String mobile;
    private String uniqueId;
    private String userName;
    private String userStatus;
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd HH:mm:ss")
    private Date createDate;
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd HH:mm:ss")
    private Date activationDate;

    // Constructor
    public CustomerDTO(String emailId, String mobile, String uniqueId, String userName, String userStatus, Date createDate, Date activationDate) {
        this.emailId = emailId;
        this.mobile = mobile;
        this.uniqueId = uniqueId;
        this.userName = userName;
        this.userStatus = userStatus;
        this.createDate = createDate;
        this.activationDate = activationDate;
    }

	public String getEmailId() {
		return emailId;
	}

	public void setEmailId(String emailId) {
		this.emailId = emailId;
	}

	public String getMobile() {
		return mobile;
	}

	public void setMobile(String mobile) {
		this.mobile = mobile;
	}

	public String getUniqueId() {
		return uniqueId;
	}

	public void setUniqueId(String uniqueId) {
		this.uniqueId = uniqueId;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getUserStatus() {
		return userStatus;
	}

	public void setUserStatus(String userStatus) {
		this.userStatus = userStatus;
	}

	public Date getCreateDate() {
		return createDate;
	}

	public void setCreateDate(Date createDate) {
		this.createDate = createDate;
	}

	public Date getActivationDate() {
		return activationDate;
	}

	public void setActivationDate(Date activationDate) {
		this.activationDate = activationDate;
	}

    // Getters and setters (optional)
}
