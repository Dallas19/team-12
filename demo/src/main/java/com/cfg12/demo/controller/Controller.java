package com.cfg12.demo.controller;

import com.cfg12.demo.model.User;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import com.twilio.Twilio;
import com.twilio.rest.api.v2010.account.Message;
import com.twilio.type.PhoneNumber;

import java.util.ArrayList;
import java.util.List;
import com.cfg12.demo.model.keys;

@RestController
public class Controller {

    private List<User> users = createList();

    @RequestMapping(value = "/account", method = RequestMethod.GET, produces = "application/json")
    public List<User> firstPage() {
        return users;
    }

    private static List<User> createList() {
        List<User> tempUsers = new ArrayList<>();
        User usr1 = new User();
        usr1.setUsername("usr1");
        usr1.setFirstName("nagu");
        usr1.setLastName("singirikonda");
        usr1.setEmergencyNum(2143545125);
        usr1.setAddress("2238 Legacy Trail");
        usr1.setCondition("Epilepsy");
        usr1.setEmail("naguusa@gmail.com");
        tempUsers.add(usr1);
        return tempUsers;
    }

    @RequestMapping(value = "/alert", method = RequestMethod.GET, produces = "applicatison/json")
    public String sendMessage() {
        Twilio.init(keys.getACCOUNT_SID(), keys.getAUTH_TOKEN());
        Message.creator(new PhoneNumber("2143545125"), new PhoneNumber("2055572680"),
                "Message from Spring Boot Application").create();
        return "Message sent yo";
    }
}
