package lk.ac.vau.bordin.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import lk.ac.vau.bordin.model.Sample;

public interface SampleRepo extends MongoRepository<Sample,String>{
    
}