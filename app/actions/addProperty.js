'use server';

async function addProperty (formData){
    // Access all values from amenities and images
    const amenities = formData.getAll('amenities');
    const images = formData.getAll('images')
      .filter((image) => image.name !== '')
      .map((image) => image.name);
    
    const propertyData = {
        type: formData.get("type"),
        name: formData.get("name"),
        description: formData.get("description"),
        location: {
          street: formData.get("location.street"),
          zipcode: formData.get("location.zipcode"),
          city: formData.get("location.city"),
          state: formData.get("location.state"),
        },
        beds: formData.get("beds"),
        baths: formData.get("baths"),
        square_feet: formData.get("square_feet"),
        amenities,
        rates : {
            weekly : formData.get("rates.weekly"),
            nightly : formData.get("rates.nightly"),
            monthly : formData.get("rates.monthly"),
        },
        seller_info : {
            name: formData.get("seller_info.name"),
            email: formData.get("seller_info.email"),
            phone: formData.get("seller_info.phone"),
        },
        images
    };
    console.log(propertyData);
}

export default addProperty;