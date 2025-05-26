package lk.ac.vau.bordin.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "boardings")
public class Boarding {

    @Id
    private String id;

    private String title;
    private String description;
    private String price;
    private String location;
    private String status;
    private String imagePath; // File path or URL to the uploaded image

    public Boarding() {}

    public Boarding(String title, String description, String price, String location, String status, String imagePath) {
        this.title = title;
        this.description = description;
        this.price = price;
        this.location = location;
        this.status = status;
        this.imagePath = imagePath;
    }

    // --- Getters ---
    public String getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public String getDescription() {
        return description;
    }

    public String getPrice() {
        return price;
    }

    public String getLocation() {
        return location;
    }

    public String getStatus() {
        return status;
    }

    public String getImagePath() {
        return imagePath;
    }

    // --- Setters ---
    public void setId(String id) {
        this.id = id;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public void setPrice(String price) {
        this.price = price;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public void setImagePath(String imagePath) {
        this.imagePath = imagePath;
    }
}

