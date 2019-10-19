package com.cfg12.demo.model;

public class User {
    private String username;
    private String email;
    private String condition;
    private String firstName;
    private String lastName;
    private long emergencyNum;
    private String address;

    public String getUsername() {
        return username;
    }
    public void setUsername(String username) {
        this.username = username;
    }
    public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
    }
    public String getCondition() {
        return condition;
    }
    public void setCondition(String condition) {
        this.condition = condition;
    }
    public String getFirstName() {
        return firstName;
    }
    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }
    public String getLastName() {
        return lastName;
    }
    public void setLastName(String lastName) {
        this.lastName = lastName;
    }
    public long getEmergencyNum() {
        return emergencyNum;
    }
    public void setEmergencyNum(long emergencyNum) {
        this.emergencyNum = emergencyNum;
    }
    public String getAddress() {
        return address;
    }
    public void setAddress(String address) {
        this.address = address;
    }

    public User() {
    }

    public User(String username, String email, String condition, String firstName, String lastName, long emergencyNum,
                String address) {
        this.username = username;
        this.email = email;
        this.condition = condition;
        this.firstName = firstName;
        this.lastName = lastName;
        this.emergencyNum = emergencyNum;
        this.address = address;
    }



}
