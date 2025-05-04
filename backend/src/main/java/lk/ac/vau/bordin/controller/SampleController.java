package lk.ac.vau.bordin.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import lk.ac.vau.bordin.model.Sample;
import lk.ac.vau.bordin.repository.SampleRepo;


@RestController
public class SampleController {

    @Autowired
    private SampleRepo sampleRepository;

    @GetMapping("/sample")
    public String createSample() {
        Sample sample = new Sample("Test User", 30);
        sampleRepository.save(sample);
        return "Sample document inserted successfully!";
    }
}

