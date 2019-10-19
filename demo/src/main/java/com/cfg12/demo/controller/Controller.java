package com.cfg12.demo.controller;

import com.cfg12.demo.model.User;
import com.cfg12.demo.model.keys;
import org.springframework.web.bind.annotation.*;
import com.twilio.Twilio;
import com.twilio.rest.api.v2010.account.Message;
import com.twilio.type.PhoneNumber;
import java.util.ArrayList;
import java.util.List;
import com.cfg12.demo.AppConf;

@CrossOrigin
@RestController
public class Controller {


    @CrossOrigin
    @RequestMapping(value = "/users", method = RequestMethod.GET, produces = "application/json")
    @GetMapping("/users")
    public String index() {
        return "index";
    }

    @RequestMapping(value = "/alert", method = RequestMethod.GET, produces = "application/json")
    @GetMapping("/alert")
    public String sendMessage() {
        Twilio.init(keys.getACCOUNT_SID(), keys.getAUTH_TOKEN());
        Message.creator(new PhoneNumber("2143545125"), new PhoneNumber("2055572680"),
                "Message from Spring Boot Application").create();
        return "Message sent yo";
    }
}
