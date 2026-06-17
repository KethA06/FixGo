package org.example.controller;

import org.example.dto.ServicesDTO;
import org.example.entity.Services;
import org.example.service.ServicesService;


import java.util.List;

//@RestController
//@RequestMapping("/api/services")
public class ServiceController {

    private final ServicesService service;

    public ServiceController(ServicesService service) {
        this.service = service;
    }

  //  @PostMapping
    //public Services addService(@RequestBody ServicesDTO dto) {
      //  return service.createService(dto);
    }

    //@GetMapping
    //public List<Services> getAllServices() {
        //return service.getAllServices();

