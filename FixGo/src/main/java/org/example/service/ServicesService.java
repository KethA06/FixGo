package org.example.service;

import org.example.dto.ServicesDTO;
import org.example.entity.Services;
import org.example.repository.ServicesRepository;
//import org.springframework.stereotype.Service;

import java.util.List;

//Services
public class ServicesService {

    private final ServicesRepository repository;

    public ServicesService(ServicesRepository repository) {
        this.repository = repository;
    }

    public Services createService(ServicesDTO dto) {
        Services service = new Services(dto.getName(), dto.getDescription());
        // return repository.save(service);
    }

    public List<Services> getAllServices() {

        //return repository.finalize();
    }
}

