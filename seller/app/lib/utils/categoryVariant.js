const unitWeight = ['LB', 'KG', 'GR', 'Hundredths Pounds', 'MG', 'Tons', 'OZ'];
const unitWattage = ['Watt', 'Hours', 'Picowatts', 'Milliamp Hours', 'Milliwatts', 'Microwatts', 'Kilowatt Hours', 'Kilowatts', 'Nanowatts', 'Watts'];
const unitMemory = ['MB', 'GB', 'TB'];
const unitLength = ['FT', 'CM', 'MM', 'DM', 'Picometre', 'µM', 'M', 'Miles', 'Yards', 'Mils', 'IN', 'Nanometre', 'Hundredths-Inches', 'Kilometres', 'Angstrom'];
const unitCapacity = ['liters', 'Quarts', 'Fluid Ounces', 'ounces', 'milliliters', 'Cubic Feet', 'Microliters', 'Cubic Centimeters', 'Pints', 'Gallons', 'pounds', 'Tons', 'Cubic Inches', 'kilograms'];
const unitOptical = ['diopters'];
const unitLensPower = ['milliwatts', 'microwatts', 'horsepower', 'nanowatts', 'picowatts', 'watts'];
const unitGraduation = ['Feet', 'centimeters', 'millimeters', 'Decimeters', 'Pints', 'Inches', 'gallons', 'Cubic Meters', 'nanometer', 'Hundredths-Inches', 'Ten Thousandths Inches', 'Cubic Centimeters', 'Quarts', 'picometer', 'milliliters', 'Kilometers', 'Fluid Ounces', 'Cubic Yards', 'Meters', 'micrometer', 'Cubic Inches', 'Imperial Gallons', 'Yards', 'Cubic Feet', 'Miles', 'Thousandths Inches', 'liters', 'Angstrom'];

const Categories = ['Electronics','Fashion', 'Grocery', 'Home Decor', 'Health and Wellness', 'Beauty and Personal Care', 'Food and Beverages'];

const SubCategories = [
    {
        'category': 'Electronics',
        'subCategories': [
            {value: 'audio', key: 'Audio', protocolKey: ''},
            {value: 'camera_and_camcorder', key: 'Camera and Camcorder', protocolKey: ''},
            {value: 'computer_peripheral', key: 'Computer Peripheral', protocolKey: ''},
            {value: 'desktop_and_laptop', key: 'Desktop and Laptop', protocolKey: ''},
            {value: 'earphone', key: 'Earphone', protocolKey: ''},
            {value: 'gaming', key: 'Gaming', protocolKey: ''},
            {value: 'headphone', key: 'Headphone', protocolKey: ''},
            {value: 'mobile_phone', key: 'Mobile Phone', protocolKey: ''},
            {value: 'mobile_accessories', key: 'Mobile Accessories', protocolKey: ''},
            {value: 'safety_security', key: 'Safety Security', protocolKey: ''},
            {value: 'smart_watches', key: 'Smart Watches', protocolKey: ''},
            {value: 'speaker', key: 'Speaker', protocolKey: ''},
            {value: 'television', key: 'Television', protocolKey: ''},
            {value: 'video', key: 'Video', protocolKey: ''},
            {value: 'air_conditioning_and_air_cleaners', key: 'Air Conditioning and Air Cleaners', protocolKey: ''},
            {value: 'health_home_and_personal_care', key: 'Health, Home and Personal Care', protocolKey: ''},
            {value: 'heaters', key: 'Heaters', protocolKey: ''},
            {value: 'kitchen_appliances', key: 'Kitchen Appliances', protocolKey: ''},
            {value: 'lighting_and_electric Fans', key: 'Lighting and Electric Fans', protocolKey: ''},
            {value: 'refrigerators_and_freezers', key: 'Refrigerators and Freezers', protocolKey: ''},
            {value: 'vacuum_cleaners', key: 'Vacuum Cleaners', protocolKey: ''},
            {value: 'washing_machines_and_accessories', key: 'Washing Machines and Accessories', protocolKey: ''},
            {value: 'water_purifiers_and_coolers', key: 'Water Purifiers and Coolers', protocolKey: ''}
        ]
    },
    {
        'category':'Fashion',
        'subCategories' :[
            {value: "Men's Fashion Accessories", key: "Men's Fashion Accessories", protocolKey: "@ondc/org/statutory_reqs_packaged_commodities"},
            {value: "Men's Footwear Accessories", key: "Men's Footwear Accessories", protocolKey: "@ondc/org/statutory_reqs_packaged_commodities"},
            {value: "Men's Topwear", key: "Men's Topwear", protocolKey: "@ondc/org/statutory_reqs_packaged_commodities"},
            {value: "Men's Bottomwear", key: "Men's Bottomwear", protocolKey: "@ondc/org/statutory_reqs_packaged_commodities"},
            {value: "Men's Innerwear & Sleepwear", key: "Men's Innerwear & Sleepwear", protocolKey: "@ondc/org/statutory_reqs_packaged_commodities"},
            {value: "Men's Bags & Luggage", key: "Men's Bags & Luggage", protocolKey: "@ondc/org/statutory_reqs_packaged_commodities"},
            {value: "Men's Eyewear", key: "Men's Eyewear", protocolKey: "@ondc/org/statutory_reqs_packaged_commodities"},
            {value: "Men's Footwear", key: "Men's Footwear", protocolKey: "@ondc/org/statutory_reqs_packaged_commodities"},
            {value: "Men's Jewellery", key: "Men's Jewellery", protocolKey: "@ondc/org/statutory_reqs_packaged_commodities"},
            {value: "Women's Fashion Accessories", key: "Women's Fashion Accessories", protocolKey: "@ondc/org/statutory_reqs_packaged_commodities"},
            {value: "Women's Footwear Accessories", key: "Women's Footwear Accessories", protocolKey: "@ondc/org/statutory_reqs_packaged_commodities"},
            {value: "Women's Indian & Fusion Wear", key: "Women's Indian & Fusion Wear", protocolKey: "@ondc/org/statutory_reqs_packaged_commodities"},
            {value: "Women's Western Wear", key: "Women's Western Wear", protocolKey: "@ondc/org/statutory_reqs_packaged_commodities"},
            {value: "Women's Lingerie & Sleepwear", key: "Women's Lingerie & Sleepwear", protocolKey: "@ondc/org/statutory_reqs_packaged_commodities"},
            {value: "Women's Bags & Luggage", key: "Women's Bags & Luggage", protocolKey: "@ondc/org/statutory_reqs_packaged_commodities"},
            {value: "Women's Eyewear", key: "Women's Eyewear", protocolKey: "@ondc/org/statutory_reqs_packaged_commodities"},
            {value: "Women's Footwear", key: "Women's Footwear", protocolKey: "@ondc/org/statutory_reqs_packaged_commodities"},
            {value: "Women's Jewellery", key: "Women's Jewellery", protocolKey: "@ondc/org/statutory_reqs_packaged_commodities"},
            {value: "Boy's Clothing", key: "Boy's Clothing", protocolKey: "@ondc/org/statutory_reqs_packaged_commodities"},
            {value: "Boy's Footwear", key: "Boy's Footwear", protocolKey: "@ondc/org/statutory_reqs_packaged_commodities"},
            {value: "Girl's Clothing", key: "Girl's Clothing", protocolKey: "@ondc/org/statutory_reqs_packaged_commodities"},
            {value: "Girl's Footwear", key: "Girl's Footwear", protocolKey: "@ondc/org/statutory_reqs_packaged_commodities"},
            {value: "Infant's Wear", key: "Infant's Wear", protocolKey: "@ondc/org/statutory_reqs_packaged_commodities"},
            {value: "Infant Care & Accessories", key: "Infant Care & Accessories", protocolKey: "@ondc/org/statutory_reqs_packaged_commodities"},
            {value: "Infant Feeding & Nursing Essentials", key: "Infant Feeding & Nursing Essentials", protocolKey: "@ondc/org/statutory_reqs_packaged_commodities"},
            {value: "Infant Bath Accessories", key: "Infant Bath Accessories", protocolKey: "@ondc/org/statutory_reqs_packaged_commodities"},
            {value: "Infant Health & Safety", key: "Infant Health & Safety", protocolKey: "@ondc/org/statutory_reqs_packaged_commodities"},
            {value: "Infant Diapers & Toilet Training", key: "Infant Diapers & Toilet Training", protocolKey: "@ondc/org/statutory_reqs_packaged_commodities"},
            {value: "Kid's Towels & Wrappers", key: "Kid's Towels & Wrappers", protocolKey: "@ondc/org/statutory_reqs_packaged_commodities"},
            {value: "Kid's Fashion Accessories", key: "Kid's Fashion Accessories", protocolKey: "@ondc/org/statutory_reqs_packaged_commodities"},
            {value: "Kid's Jewellery", key: "Kid's Jewellery", protocolKey: "@ondc/org/statutory_reqs_packaged_commodities"},
            {value: "Kid's Eyewear", key: "Kid's Eyewear", protocolKey: "@ondc/org/statutory_reqs_packaged_commodities"},
            {value: "Kid's Bags & Luggage", key: "Kid's Bags & Luggage", protocolKey: "@ondc/org/statutory_reqs_packaged_commodities"}
        ]
    },
    {
        'category': 'Grocery',
        'subCategories': [
            {value: 'fruits_and_vegetables', key: 'Fruits and Vegetables', protocolKey: "@ondc/org/mandatory_reqs_veggies_fruits"},
            {value: 'masala_and_seasoning', key: 'Masala & Seasoning', protocolKey: "@ondc/org/statutory_reqs_packaged_commodities"},
            {value: 'oil_and_ghee', key: 'Oil & Ghee', protocolKey: "@ondc/org/statutory_reqs_packaged_commodities"},
            {value: 'gourmet_and_world_foods', key: 'Gourmet & World Foods', protocolKey: "@ondc/org/statutory_reqs_prepackaged_food"},
            {value: 'foodgrains', key: 'Foodgrains', protocolKey: "@ondc/org/statutory_reqs_packaged_commodities"},
            {value: 'eggs_meat_and_fish', key: 'Eggs, Meat & Fish', protocolKey: "@ondc/org/statutory_reqs_packaged_commodities"},
            {value: 'cleaning_and_household', key: 'Cleaning & Household', protocolKey: "@ondc/org/statutory_reqs_packaged_commodities"},
            {value: 'beverages', key: 'Beverages', protocolKey: "@ondc/org/statutory_reqs_prepackaged_food"},
            {value: 'beauty_and_hygiene', key: 'Beauty & Hygiene', protocolKey: "@ondc/org/statutory_reqs_packaged_commodities"},
            {value: 'bakery_cakes_and_dairy', key: 'Bakery, Cakes & Dairy', protocolKey: "@ondc/org/statutory_reqs_prepackaged_food"},
            {value: 'kitchen_accessories', key: 'Kitchen Accessories', protocolKey: "@ondc/org/statutory_reqs_packaged_commodities"},
            {value: 'baby_care', key: 'Baby Care', protocolKey: "@ondc/org/statutory_reqs_packaged_commodities"},
            {value: 'snacks_and_branded_Foods', key: 'Snacks & Branded Foods', protocolKey: "@ondc/org/statutory_reqs_prepackaged_food"},
            {value: 'pet_care', key: 'Pet Care', protocolKey: "@ondc/org/statutory_reqs_packaged_commodities"},
            {value: 'stationery', key: 'Stationery', protocolKey: "@ondc/org/statutory_reqs_packaged_commodities"},
        ]
    },
    {
        'category': 'Home Decor',
        'subCategories': [
            {value: 'home_decor', key: 'Home Decor', protocolKey: "@ondc/org/statutory_reqs_packaged_commodities"},
            {value: 'home_furnishings', key: 'Home Furnishings', protocolKey: "@ondc/org/statutory_reqs_packaged_commodities"},
            {value: 'furniture', key: 'Furniture', protocolKey: "@ondc/org/statutory_reqs_packaged_commodities"},
            {value: 'garden_and_outdoor_products', key: 'Garden and Outdoor Products', protocolKey: "@ondc/org/statutory_reqs_packaged_commodities"},
            {value: 'home_improvement', key: 'Home Improvement', protocolKey: "@ondc/org/statutory_reqs_packaged_commodities"},
            {value: 'cookware_and_dining', key: 'Cookware and Dining', protocolKey: "@ondc/org/statutory_reqs_packaged_commodities"},
            {value: 'storage_and_organisation', key: 'Storage and Organisation', protocolKey: "@ondc/org/statutory_reqs_packaged_commodities"},
        ]
    },
    {
        'category': 'Health and Wellness',
        'subCategories': [
            {key: "Pain Relief", value: "Pain Relief", protocolKey: "@ondc/org/statutory_reqs_packaged_commodities"},
            {key: "Nutrition and Fitness Supplements", value: "Nutrition and Fitness Supplements", protocolKey: "@ondc/org/statutory_reqs_packaged_commodities"},
            {key: "Personal Care", value: "Personal Care", protocolKey: "@ondc/org/statutory_reqs_packaged_commodities"},
            {key: "Speciality Care", value: "Speciality Care", protocolKey: "@ondc/org/statutory_reqs_packaged_commodities"},
            {key: "Covid Essentials", value: "Covid Essentials", protocolKey: "@ondc/org/statutory_reqs_packaged_commodities"},
            {key: "Diabetes Control", value: "Diabetes Control", protocolKey: "@ondc/org/statutory_reqs_packaged_commodities"},
            {key: "Healthcare Devices", value: "Healthcare Devices", protocolKey: "@ondc/org/statutory_reqs_packaged_commodities"},
            {key: "Ayush", value: "Ayush", protocolKey: "@ondc/org/statutory_reqs_packaged_commodities"}
        ]
    },
    {
        'category': 'Beauty and Personal Care',
        'subCategories': [
            {value: "Bath & Body", key: "Bath & Body", protocolKey: "@ondc/org/statutory_reqs_packaged_commodities"},
            {value: "Feminine Care", key: "Feminine Care", protocolKey: "@ondc/org/statutory_reqs_packaged_commodities"},
            {value: "Fragrance", key: "Fragrance", protocolKey: "@ondc/org/statutory_reqs_packaged_commodities"},
            {value: "Hair Care", key: "Hair Care", protocolKey: "@ondc/org/statutory_reqs_packaged_commodities"},
            {value: "Make Up", key: "Make Up", protocolKey: "@ondc/org/statutory_reqs_packaged_commodities"},
            {value: "Men's Grooming", key: "Men's Grooming", protocolKey: "@ondc/org/statutory_reqs_packaged_commodities"},
            {value: "Oral Care", key: "Oral Care", protocolKey: "@ondc/org/statutory_reqs_packaged_commodities"},
            {value: "Skin Care", key: "Skin Care", protocolKey: "@ondc/org/statutory_reqs_packaged_commodities"},
            {value: "Maternity Care", key: "Maternity Care", protocolKey: "@ondc/org/statutory_reqs_packaged_commodities"},
            {value: "Baby Care", key: "Baby Care", protocolKey: "@ondc/org/statutory_reqs_packaged_commodities"},
            {value: "Nursing & Feeding", key: "Nursing & Feeding", protocolKey: "@ondc/org/statutory_reqs_packaged_commodities"},
            {value: "Sexual Wellness & Sensuality", key: "Sexual Wellness & Sensuality", protocolKey: "@ondc/org/statutory_reqs_packaged_commodities"},
            {value: "Tools & Accessories", key: "Tools & Accessories", protocolKey: "@ondc/org/statutory_reqs_packaged_commodities"},
        ]
    },
    {
        'category': 'Food and Beverages',
        'subCategories': [
            {value: "Baklava", key: "Baklava", protocolKey: "@ondc/org/mandatory_reqs_veggies_fruits"},
            {value: "Bao", key: "Bao", protocolKey: "@ondc/org/mandatory_reqs_veggies_fruits"},
            {value: "Barbecue", key: "Barbecue", protocolKey: "@ondc/org/mandatory_reqs_veggies_fruits"},
            {value: "Biryani", key: "Biryani", protocolKey: "@ondc/org/mandatory_reqs_veggies_fruits"},
            {value: "Bread", key: "Bread", protocolKey: "@ondc/org/mandatory_reqs_veggies_fruits"},
            {value: "Burger", key: "Burger", protocolKey: "@ondc/org/mandatory_reqs_veggies_fruits"},
            {value: "Cakes", key: "Cakes", protocolKey: "@ondc/org/mandatory_reqs_veggies_fruits"},
            {value: "Chaat", key: "Chaat", protocolKey: "@ondc/org/mandatory_reqs_veggies_fruits"},
            {value: "Cheesecakes", key: "Cheesecakes", protocolKey: "@ondc/org/mandatory_reqs_veggies_fruits"},
            {value: "Chicken", key: "Chicken", protocolKey: "@ondc/org/mandatory_reqs_veggies_fruits"},
            {value: "Chicken wings", key: "Chicken wings", protocolKey: "@ondc/org/mandatory_reqs_veggies_fruits"},
            {value: "Chips", key: "Chips", protocolKey: "@ondc/org/mandatory_reqs_veggies_fruits"},
            {value: "Coffee", key: "Coffee", protocolKey: "@ondc/org/mandatory_reqs_veggies_fruits"},
            {value: "Cookies", key: "Cookies", protocolKey: "@ondc/org/mandatory_reqs_veggies_fruits"},
            {value: "Crepes", key: "Crepes", protocolKey: "@ondc/org/mandatory_reqs_veggies_fruits"},
            {value: "Dal", key: "Dal", protocolKey: "@ondc/org/mandatory_reqs_veggies_fruits"},
            {value: "Desserts", key: "Desserts", protocolKey: "@ondc/org/mandatory_reqs_veggies_fruits"},
            {value: "Dhokla", key: "Dhokla", protocolKey: "@ondc/org/mandatory_reqs_veggies_fruits"},
            {value: "Dosa", key: "Dosa", protocolKey: "@ondc/org/mandatory_reqs_veggies_fruits"},
            {value: "Doughnuts", key: "Doughnuts", protocolKey: "@ondc/org/mandatory_reqs_veggies_fruits"},
            {value: "Eggs", key: "Eggs", protocolKey: "@ondc/org/mandatory_reqs_veggies_fruits"},
            {value: "Energy Drinks", key: "Energy Drinks", protocolKey: "@ondc/org/mandatory_reqs_veggies_fruits"},
            {value: "Falafel", key: "Falafel", protocolKey: "@ondc/org/mandatory_reqs_veggies_fruits"},
            {value: "Fresh Juice", key: "Fresh Juice", protocolKey: "@ondc/org/mandatory_reqs_veggies_fruits"},
            {value: "Fries", key: "Fries", protocolKey: "@ondc/org/mandatory_reqs_veggies_fruits"},
            {value: "Ice cream", key: "Ice cream", protocolKey: "@ondc/org/mandatory_reqs_veggies_fruits"},
            {value: "Idli", key: "Idli", protocolKey: "@ondc/org/mandatory_reqs_veggies_fruits"},
            {value: "Kabab", key: "Kabab", protocolKey: "@ondc/org/mandatory_reqs_veggies_fruits"},
            {value: "Kachori", key: "Kachori", protocolKey: "@ondc/org/mandatory_reqs_veggies_fruits"},
            {value: "Kulfi", key: "Kulfi", protocolKey: "@ondc/org/mandatory_reqs_veggies_fruits"},
            {value: "Lassi", key: "Lassi", protocolKey: "@ondc/org/mandatory_reqs_veggies_fruits"},
            {value: "Meal bowl", key: "Meal bowl", protocolKey: "@ondc/org/mandatory_reqs_veggies_fruits"},
            {value: "Mezze", key: "Mezze", protocolKey: "@ondc/org/mandatory_reqs_veggies_fruits"},
            {value: "Mithai", key: "Mithai", protocolKey: "@ondc/org/mandatory_reqs_veggies_fruits"},
            {value: "Momos", key: "Momos", protocolKey: "@ondc/org/mandatory_reqs_veggies_fruits"},
            {value: "Mutton", key: "Mutton", protocolKey: "@ondc/org/mandatory_reqs_veggies_fruits"},
            {value: "Nachos", key: "Nachos", protocolKey: "@ondc/org/mandatory_reqs_veggies_fruits"},
            {value: "Noodles", key: "Noodles", protocolKey: "@ondc/org/mandatory_reqs_veggies_fruits"},
            {value: "Pakodas", key: "Pakodas", protocolKey: "@ondc/org/mandatory_reqs_veggies_fruits"},
            {value: "Pancakes", key: "Pancakes", protocolKey: "@ondc/org/mandatory_reqs_veggies_fruits"},
            {value: "Paneer", key: "Paneer", protocolKey: "@ondc/org/mandatory_reqs_veggies_fruits"},
            {value: "Pasta", key: "Pasta", protocolKey: "@ondc/org/mandatory_reqs_veggies_fruits"},
            {value: "Pastries", key: "Pastries", protocolKey: "@ondc/org/mandatory_reqs_veggies_fruits"},
            {value: "Pie", key: "Pie", protocolKey: "@ondc/org/mandatory_reqs_veggies_fruits"},
            {value: "Pizza", key: "Pizza", protocolKey: "@ondc/org/mandatory_reqs_veggies_fruits"},
            {value: "Poha", key: "Poha", protocolKey: "@ondc/org/mandatory_reqs_veggies_fruits"},
            {value: "Raita", key: "Raita", protocolKey: "@ondc/org/mandatory_reqs_veggies_fruits"},
            {value: "Rice", key: "Rice", protocolKey: "@ondc/org/mandatory_reqs_veggies_fruits"},
            {value: "Rolls", key: "Rolls", protocolKey: "@ondc/org/mandatory_reqs_veggies_fruits"},
            {value: "Roti", key: "Roti", protocolKey: "@ondc/org/mandatory_reqs_veggies_fruits"},
            {value: "Salad", key: "Salad", protocolKey: "@ondc/org/mandatory_reqs_veggies_fruits"},
            {value: "Samosa", key: "Samosa", protocolKey: "@ondc/org/mandatory_reqs_veggies_fruits"},
            {value: "Sandwich", key: "Sandwich", protocolKey: "@ondc/org/mandatory_reqs_veggies_fruits"},
            {value: "Seafood", key: "Seafood", protocolKey: "@ondc/org/mandatory_reqs_veggies_fruits"},
            {value: "Shakes & Smoothies", key: "Shakes & Smoothies", protocolKey: "@ondc/org/mandatory_reqs_veggies_fruits"},
            {value: "Soft Drink", key: "Soft Drink", protocolKey: "@ondc/org/mandatory_reqs_veggies_fruits"},
            {value: "Soup", key: "Soup", protocolKey: "@ondc/org/mandatory_reqs_veggies_fruits"},
            {value: "Spring Roll", key: "Spring Roll", protocolKey: "@ondc/org/mandatory_reqs_veggies_fruits"},
            {value: "Sushi", key: "Sushi", protocolKey: "@ondc/org/mandatory_reqs_veggies_fruits"},
            {value: "Tacos", key: "Tacos", protocolKey: "@ondc/org/mandatory_reqs_veggies_fruits"},
            {value: "Tandoori", key: "Tandoori", protocolKey: "@ondc/org/mandatory_reqs_veggies_fruits"},
            {value: "Tart", key: "Tart", protocolKey: "@ondc/org/mandatory_reqs_veggies_fruits"},
            {value: "Tea", key: "Tea", protocolKey: "@ondc/org/mandatory_reqs_veggies_fruits"},
            {value: "Thali", key: "Thali", protocolKey: "@ondc/org/mandatory_reqs_veggies_fruits"},
            {value: "Tikka", key: "Tikka", protocolKey: "@ondc/org/mandatory_reqs_veggies_fruits"},
            {value: "Upma", key: "Upma", protocolKey: "@ondc/org/mandatory_reqs_veggies_fruits"},
            {value: "Uttapam", key: "Uttapam", protocolKey: "@ondc/org/mandatory_reqs_veggies_fruits"},
            {value: "Vada", key: "Vada", protocolKey: "@ondc/org/mandatory_reqs_veggies_fruits"},
            {value: "Vegetables", key: "Vegetables", protocolKey: "@ondc/org/mandatory_reqs_veggies_fruits"},
            {value: "Waffle", key: "Waffle", protocolKey: "@ondc/org/mandatory_reqs_veggies_fruits"},
            {value: "Wrap", key: "Wrap", protocolKey: "@ondc/org/mandatory_reqs_veggies_fruits"},
            {value: "Yogurt", key: "Yogurt", protocolKey: "@ondc/org/mandatory_reqs_veggies_fruits"}
        ]
    }
];


const Attributes = [
    {
        'category': 'Electronics',
        'subCategory': 'Audio',
        'attributes': [
            { 'name': 'Color', 'type': 'input', 'example': 'Red,Blue', 'variationAllowed': true }
        ]
    },
    {
        'category': 'Electronics',
        'subCategory': 'Camera and Camcorder',
        'attributes': [
            { 'name': 'Size', 'type': 'input', 'example': 'Small', 'variationAllowed': true },
            { 'name': 'Compact', 'type': 'input', 'example': '', 'variationAllowed': true },
            { 'name': 'Number of Items', 'type': 'number', 'example': 'Small', 'variationAllowed': true },
            { 'name': 'Full-Size', 'type': 'input', 'example': 'Small', 'variationAllowed': true },
            { 'name': 'Color', 'type': 'input', 'example': 'Small', 'variationAllowed': true },
            { 'name': 'stylename', 'type': 'input', 'example': 'Small', 'variationAllowed': true }
        ]
    }, {
        'category': 'Electronics',
        'subCategory': 'Computer Peripheral',
        'attributes': [
            { 'name': 'Size', 'type': 'input', 'example': '', 'variationAllowed': true },
            { 'name': 'Color', 'type': 'input', 'example': '', 'variationAllowed': true },
            { 'name': 'stylename', 'type': 'input', 'example': '', 'variationAllowed': true }
        ]
    }, {
        'category': 'Electronics',
        'subCategory': 'Desktop and Laptop',
        'attributes': [
            { 'name': 'Item Weight', 'unit': unitWeight, 'type': 'input', 'example': '', 'variationAllowed': true },
            { 'name': 'Number of Items', 'type': 'number', 'example': '', 'variationAllowed': true },
            { 'name': 'Wattage', 'unit': unitWattage, 'type': 'input', 'example': '', 'variationAllowed': true },
            { 'name': 'Voltage', 'type': 'input', 'example': '', 'variationAllowed': true },
            { 'name': 'Team Name', 'type': 'input', 'example': '', 'variationAllowed': true },
            { 'name': 'Item Display weight', 'unit': unitWeight, 'type': 'input', 'example': '', 'variationAllowed': true },
            { 'name': 'Memory Storage Capacity', 'unit': unitMemory, 'type': 'input', 'example': '', 'variationAllowed': true },
            { 'name': 'Product Grade', 'type': 'input', 'example': '', 'variationAllowed': true },
            { 'name': 'Hardware Platform', 'type': 'input', 'example': '', 'variationAllowed': true },
            { 'name': 'Hard Drive Size', 'unit': unitMemory, 'type': 'input', 'example': '', 'variationAllowed': true },
            { 'name': 'Screen Size', 'unit': unitLength, 'type': 'input', 'example': '', 'variationAllowed': true },
            {'name':'Brand','type':'input','example':'Apple', 'variationAllowed':false},
            {'name':'Color','type':'select','example':'Black','variationAllowed':true},
            {'name':'Model','type':'input','example':'MacBook Air', 'variationAllowed':false},
            {'name':'CPU','type':'input','example':'Core M family', 'variationAllowed':false},
            {'name':'cpu_mfr','type':'input','example':'Intel', 'variationAllowed':false},
        ]
    }, {
        'category': 'Electronics',
        'subCategory': 'Earphone',
        'attributes': [
            { 'name': 'Size', 'type': 'input', 'example': '', 'variationAllowed': true },
            { 'name': 'Edition', 'type': 'input', 'example': '', 'variationAllowed': true },
            {'name':'brand','type':'input','example':'Samsung', 'variationAllowed':false},
            {'name':'Color','type':'select','example':'Black', 'variationAllowed':true},
            {'name':'model','type':'input','example':'Galaxy Bean Buds Live', 'variationAllowed':false},
            {'name':'connectivity','type':'input','example':'wireless', 'variationAllowed':true},
            {'name':'form_factor','type':'input','example':'In Ear', 'variationAllowed':false},
        ]
    }, {
        'category': 'Electronics',
        'subCategory': 'Gaming',
        'attributes': [
            { 'name': 'Item Weight', 'type': 'input', 'example': '', 'variationAllowed': true },
            { 'name': 'Number of Items', 'type': 'numberer', 'example': '', 'variationAllowed': true },
            { 'name': 'Wattage', 'unit': unitWattage, 'type': 'input', 'example': '', 'variationAllowed': true },
            { 'name': 'Model Number', 'type': 'number', 'example': '', 'variationAllowed': true },
        ]
    }, {
        'category': 'Electronics',
        'subCategory': 'Headphone',
        'attributes': [
            {'name':'Brand','type':'input','example':'Samsung', 'variationAllowed':false},
            {'name':'Color','type':'select','example':'Black', 'variationAllowed':true},
            {'name':'Model','type':'input','example':'Galaxy Bean Buds Live', 'variationAllowed':false},
            {'name':'Connectivity','type':'input','example':'wireless', 'variationAllowed':true},
            {'name':'Form Factor','type':'input','example':'In Ear', 'variationAllowed':false},

        ]
    }, {
        'category': 'Electronics',
        'subCategory': 'Mobile Phone',
        'attributes': [
            { 'name': 'Memory', 'unit': unitMemory, 'type': 'input', 'example': '', 'variationAllowed': true },
            { 'name': 'Item Weight', 'unit': unitWeight, 'type': 'input', 'example': '', 'variationAllowed': true },
            { 'name': 'Number of Items', 'type': 'numberer', 'example': '', 'variationAllowed': true },
            { 'name': 'Team Name', 'type': 'input', 'example': '', 'variationAllowed': true },
            { 'name': 'Model Number', 'type': 'number', 'example': '', 'variationAllowed': true },
            { 'name': 'Color', 'type': 'input', 'example': '', 'variationAllowed': true },
            { 'name': 'Product Grade', 'type': 'input', 'example': '', 'variationAllowed': true },
            { 'name': 'Screen Size Unit Of Measure', 'unit': unitLength, 'type': 'input', 'example': '', 'variationAllowed': true },
            {'name':'brand','type':'input','example':'Apple iPhone', 'variationAllowed':false},
            {'name':'size','type':'input','example':'512GB', 'variationAllowed':true}
        ]
    }, {
        'category': 'Electronics',
        'subCategory': 'Mobile Accessories',
        'attributes': [
            { 'name': 'Pattern', 'type': 'input', 'example': '', 'variationAllowed': true },
            { 'name': 'Color', 'type': 'input', 'example': '', 'variationAllowed': true },
            { 'name': 'Number of Items', 'type': 'numberer', 'example': '', 'variationAllowed': true },
            { 'name': 'Material Type', 'type': 'input', 'example': '', 'variationAllowed': true },
            { 'name': 'Item Weight', 'unit': unitWeight, 'type': 'input', 'example': '', 'variationAllowed': true },
            { 'name': 'Thickness', 'unit': unitLength, 'type': 'input', 'example': '', 'variationAllowed': true },
            { 'name': 'Model Number', 'type': 'number', 'example': '', 'variationAllowed': true },
            { 'name': 'Screen Size Unit Of MeasureScreen', 'unit': unitLength, 'type': 'input', 'example': '', 'variationAllowed': true },
        ]
    }, {
        'category': 'Electronics',
        'subCategory': 'Safety Security',
        'attributes': [
            { 'name': 'Style Name', 'type': 'input', 'example': '', 'variationAllowed': true },
            { 'name': 'Size', 'type': 'input', 'example': '', 'variationAllowed': true },
            { 'name': 'Number of Items', 'type': 'numberer', 'example': '', 'variationAllowed': true },
            { 'name': 'Item Form', 'type': 'input', 'example': '', 'variationAllowed': true },
            { 'name': 'Color', 'type': 'input', 'example': '', 'variationAllowed': true },
            { 'name': 'Pattern', 'type': 'input', 'example': '', 'variationAllowed': true },
            { 'name': 'Display Weight', 'unit': unitWeight, 'type': 'input', 'example': '', 'variationAllowed': true },
        ]
    }, {
        'category': 'Electronics',
        'subCategory': 'Smart Watches',
        'attributes': [
            { 'name': 'Size', 'type': 'input', 'example': '', 'variationAllowed': true },
            { 'name': 'Style', 'type': 'input', 'example': '', 'variationAllowed': true },
            { 'name': 'Number of Items', 'type': 'numberer', 'example': '', 'variationAllowed': true },
            { 'name': 'Item Form', 'type': 'input', 'example': '', 'variationAllowed': true },
            { 'name': 'DriveMemory Storage Capacity', 'unit': unitMemory, 'type': 'input', 'example': '', 'variationAllowed': true },
            { 'name': 'Manufacturer Part Number', 'type': 'input', 'example': '', 'variationAllowed': true },
            { 'name': 'Unit Count', 'type': 'input', 'example': '', 'variationAllowed': true },
            { 'name': 'Band Colour', 'type': 'input', 'example': '', 'variationAllowed': true },
            { 'name': 'Shape', 'type': 'input', 'example': '', 'variationAllowed': true },
            { 'name': 'Screen Size', 'unit': unitLength, 'type': 'input', 'example': '', 'variationAllowed': true },
            {'name':'Brand','type':'input','example':'Boat', 'variationAllowed':false},
            {'name':'Color','type':'select','example':'Black','variationAllowed':true},
            {'name':'Model','type':'input','example':'Ultima Call Max', 'variationAllowed':false},
        ]
    }, {
        'category': 'Electronics',
        'subCategory': 'Speaker',
        'attributes': [
            {'name':'Brand','type':'input','example':'Apple iPhone', 'variationAllowed':false},
            {'name':'Color','type':'select','example':'Black', 'variationAllowed':true},
            {'name':'Size','type':'input','example':'512GB', 'variationAllowed':true},
        ]
    }, {
        'category': 'Electronics',
        'subCategory': 'Television',
        'attributes': [
            { 'name': 'Style', 'type': 'input', 'example': '', 'variationAllowed': true },
            { 'name': 'DriveMemory Storage Capacity', 'unit': unitMemory, 'type': 'input', 'example': '', 'variationAllowed': true },
            { 'name': 'Item Weight', 'unit': unitWeight, 'type': 'input', 'example': '', 'variationAllowed': true },
            { 'name': 'Number of Items', 'type': 'numberer', 'example': '', 'variationAllowed': true },
            { 'name': 'Model Number', 'type': 'input', 'example': '', 'variationAllowed': true },
            { 'name': 'Manufacturer Part Number', 'type': 'input', 'example': '', 'variationAllowed': true },
            { 'name': 'Wattage', 'unit': unitWattage, 'type': 'input', 'example': '', 'variationAllowed': true },
            { 'name': 'Unit Count', 'type': 'input', 'example': '', 'variationAllowed': false },
            { 'name': 'Voltage', 'type': 'input', 'example': '', 'variationAllowed': false },
            { 'name': 'Team Name', 'type': 'input', 'example': '', 'variationAllowed': false },
            { 'name': 'Color', 'type': 'input', 'example': '', 'variationAllowed': true },
            { 'name': 'Display Size', 'type': 'input', 'example': '', 'variationAllowed': true },
        ]
    }, {
        'category': 'Electronics',
        'subCategory': 'Video',
        'attributes': [
            { 'name': 'Style Name', 'type': 'input', 'example': '', 'variationAllowed': true },
            { 'name': 'Size', 'type': 'input', 'example': '', 'variationAllowed': true },
            { 'name': 'Color', 'type': 'input', 'example': '', 'variationAllowed': true },
        ]
    }, {
        'category': 'Electronics',
        'subCategory': 'Health, Home and Personal Care',
        'attributes': [
            { 'name': 'Item Display Length', 'type': 'input', 'example': '', 'variationAllowed': true },
            { 'name': 'Size', 'type': 'input', 'example': '', 'variationAllowed': true },
            { 'name': 'Number of Items', 'type': 'numberer', 'example': '', 'variationAllowed': true },
            { 'name': 'Material Type', 'type': 'input', 'example': '', 'variationAllowed': true },
            { 'name': 'Package Type', 'type': 'input', 'example': '', 'variationAllowed': true },
            { 'name': 'Item Display', 'type': 'input', 'example': '', 'variationAllowed': true },
            { 'name': 'Width', 'type': 'input', 'example': '', 'unit': unitLength },
            { 'name': 'Patter', 'type': 'input', 'example': '', 'variationAllowed': true },
            { 'name': 'Color', 'type': 'input', 'example': '', 'variationAllowed': true },
            { 'name': 'Item Display Height', 'type': 'input', 'example': '', 'variationAllowed': true },
            { 'name': 'Item Display Diameter', 'type': 'input', 'example': '', 'variationAllowed': true },
            { 'name': 'Item Weight', 'type': 'input', 'example': '', 'variationAllowed': true },
            { 'name': 'model', 'type': 'input', 'example': '', 'variationAllowed': true },
            { 'name': 'Manufacturer Part Number', 'type': 'number', 'example': '', 'variationAllowed': true },
            { 'name': 'Wattage', 'type': 'input', 'example': '', 'unit': unitWattage },
            { 'name': 'Unit Count', 'type': 'input', 'example': '', 'variationAllowed': true },
            { 'name': 'Shape', 'type': 'input', 'example': '', 'variationAllowed': true },
        ]
    }, {
        'category': 'Electronics',
        'subCategory': 'Air Conditioning and Air Cleaners',
        'attributes': [
            { 'name': 'Style', 'type': 'input', 'example': '', 'variationAllowed': true },
            { 'name': 'Size', 'type': 'input', 'example': '', 'variationAllowed': true },
            { 'name': 'Number of Items', 'type': 'numberer', 'example': '', 'variationAllowed': true },
            { 'name': 'Item Weight', 'unit': unitWeight, 'type': 'input', 'example': '', 'variationAllowed': true },
            { 'name': 'Wattage', 'unit': unitWattage, 'type': 'input', 'example': '', 'variationAllowed': true },
            { 'name': 'Voltage', 'type': 'input', 'example': '', 'variationAllowed': true },
            { 'name': 'Unit Count', 'type': 'input', 'example': '', 'variationAllowed': true },
            { 'name': 'Model', 'type': 'input', 'example': '', 'variationAllowed': true },
        ]
    }, {
        'category': 'Electronics',
        'subCategory': 'Heaters',
        'attributes': [
            { 'name': 'Size', 'type': 'input', 'example': '', 'variationAllowed': true },
            { 'name': 'Style', 'type': 'input', 'example': '', 'variationAllowed': true },
            { 'name': 'Number of Items', 'type': 'number', 'example': '', 'variationAllowed': true },
            { 'name': 'Item Weight', 'type': 'input', 'example': '', 'unit': unitWeight },
            { 'name': 'Wattage', 'type': 'input', 'example': '', 'unit': unitWattage },
            { 'name': 'Voltage', 'type': 'input', 'example': '', 'variationAllowed': true },
            { 'name': 'model', 'type': 'input', 'example': '', 'variationAllowed': true },
            { 'name': 'Unit Count', 'type': 'number', 'example': '', 'variationAllowed': true },
        ]
    }, {
        'category': 'Electronics',
        'subCategory': 'Kitchen Appliances',
        'attributes': [
            { 'name': 'Size', 'type': 'input', 'example': 'Large', 'variationAllowed': true },
            { 'name': 'Material Type', 'type': 'input', 'example': 'Steel', 'variationAllowed': true },
            { 'name': 'Number of Items', 'type': 'number', 'example': '2,3', 'variationAllowed': true },
            { 'name': 'Color', 'type': 'input', 'example': '', 'variationAllowed': true },
            { 'name': 'Item Weight', 'type': 'input', 'example': '3.3', 'unit': unitWeight },
            { 'name': 'Unit Count', 'type': 'number', 'example': '1', 'variationAllowed': true },
        ]
    }, {
        'category': 'Electronics',
        'subCategory': 'Lighting and Electric Fans',
        'attributes': [
            { 'name': 'Size', 'type': 'input', 'example': 'Large', 'variationAllowed': true },
            { 'name': 'Style', 'type': 'input', 'example': 'Modern', 'variationAllowed': true },
            { 'name': 'Number of Items', 'type': 'number', 'example': '6', 'variationAllowed': true },
            { 'name': 'Item Weight', 'type': 'input', 'example': '', 'unit': unitWeight },
            { 'name': 'Color', 'type': 'input', 'example': '', 'variationAllowed': true },
            { 'name': 'Material Type', 'type': 'input', 'example': 'Steel', 'variationAllowed': true },
            { 'name': 'Manufacturer Part Number', 'type': 'input', 'example': '', 'variationAllowed': true },
            { 'name': 'Model', 'type': 'input', 'example': '', 'variationAllowed': true },
            { 'name': 'Wattage', 'type': 'input', 'example': '', 'unit': unitWattage },
            { 'name': 'Unit Count', 'type': 'number', 'example': '5', 'variationAllowed': true },
            { 'name': 'Voltage', 'type': 'number', 'example': '5', 'variationAllowed': true },
        ]
    }, {
        'category': 'Electronics',
        'subCategory': 'Refrigerators and Freezers',
        'attributes': [
            { 'name': 'Size', 'type': 'input', 'example': '', 'variationAllowed': true },
            { 'name': 'Style', 'type': 'input', 'example': '', 'variationAllowed': true },
            { 'name': 'Number of Items', 'type': 'number', 'example': '', 'variationAllowed': true },
            { 'name': 'Item Weight', 'type': 'input', 'example': '4', 'unit': unitWeight },
            { 'name': 'Color', 'type': 'input', 'example': '', 'variationAllowed': true },
            { 'name': 'Material Type', 'type': 'input', 'example': '', 'variationAllowed': true },
            { 'name': 'Model', 'type': 'input', 'example': '', 'variationAllowed': true },
            { 'name': 'Capacity', 'type': 'input', 'example': '', 'unit': unitCapacity },
            { 'name': 'Manufacturer Part Number', 'type': 'input', 'example': '', 'variationAllowed': true },
            { 'name': 'Model', 'type': 'input', 'example': 'LG12', 'variationAllowed': true },
        ]
    }, {
        'category': 'Electronics',
        'subCategory': 'Vacuum Cleaners',
        'attributes': [
            { 'name': 'Size', 'type': 'input', 'example': '', 'variationAllowed': true },
            { 'name': 'Style', 'type': 'input', 'example': '', 'variationAllowed': true },
            { 'name': 'Number of Items', 'type': 'number', 'example': '', 'variationAllowed': true },
            { 'name': 'Item Weight', 'type': 'input', 'example': '4', 'unit': unitWeight },
            { 'name': 'Color', 'type': 'input', 'example': '', 'variationAllowed': true },
            { 'name': 'Material Type', 'type': 'input', 'example': '', 'variationAllowed': true },
            { 'name': 'Model', 'type': 'input', 'example': '', 'variationAllowed': true },
            { 'name': 'Capacity', 'type': 'input', 'example': '', 'unit': unitCapacity },
            { 'name': 'Manufacturer Part Number', 'type': 'input', 'example': '', 'variationAllowed': true },
            { 'name': 'Model', 'type': 'input', 'example': 'LG12', 'variationAllowed': true },
        ]
    }, {
        'category': 'Electronics',
        'subCategory': 'Washing Machines and Accessories',
        'attributes': [
            { 'name': 'Size', 'type': 'input', 'example': '', 'variationAllowed': true },
            { 'name': 'Style', 'type': 'input', 'example': '', 'variationAllowed': true },
            { 'name': 'Number of Items', 'type': 'number', 'example': '', 'variationAllowed': true },
            { 'name': 'Item Weight', 'type': 'input', 'example': '4', 'unit': unitWeight },
            { 'name': 'Color', 'type': 'input', 'example': '', 'variationAllowed': true },
            { 'name': 'Material Type', 'type': 'input', 'example': '', 'variationAllowed': true },
            { 'name': 'Model', 'type': 'input', 'example': '', 'variationAllowed': true },
            { 'name': 'Capacity', 'type': 'input', 'example': '', 'unit': unitCapacity },
            { 'name': 'Manufacturer Part Number', 'type': 'input', 'example': '', 'variationAllowed': true },
            { 'name': 'Model', 'type': 'input', 'example': 'LG12', 'variationAllowed': true },
        ]
    }, {
        'category': 'Electronics',
        'subCategory': 'Water Purifiers and Coolers',
        'attributes': [
            { 'name': 'Size', 'type': 'input', 'example': '', 'variationAllowed': true },
            { 'name': 'Graduation Interval', 'type': 'input', 'example': '', 'unit': unitGraduation },
            { 'name': 'Style', 'type': 'input', 'example': '', 'variationAllowed': true },
            { 'name': 'Number of Items', 'type': 'number', 'example': '', 'variationAllowed': true },
            { 'name': 'Item Weight', 'type': 'input', 'example': '4', 'unit': unitWeight },
            { 'name': 'Color', 'type': 'input', 'example': '', 'variationAllowed': true },
            { 'name': 'Material Type', 'type': 'input', 'example': '', 'variationAllowed': true },
            { 'name': 'Model', 'type': 'input', 'example': '', 'variationAllowed': true },
            { 'name': 'Capacity', 'type': 'input', 'example': '', 'unit': unitCapacity },
            { 'name': 'Manufacturer Part Number', 'type': 'input', 'example': '', 'variationAllowed': true },
            { 'name': 'Model', 'type': 'input', 'example': 'LG12', 'variationAllowed': true },
        ]
    },
    {
        'category': 'Grocery',
        'subCategory': 'Fruits and Vegetables',
        'attributes': [

        ]
    },
    {
        'category': 'Grocery',
        'subCategory': 'Masala and Seasoning',
        'attributes': [

        ]
    },
    {
        'category': 'Grocery',
        'subCategory': 'Oil and Ghee',
        'attributes': [

        ]
    },
    {
        'category': 'Grocery',
        'subCategory': 'Gourmet and World Foods',
        'attributes': [

        ]
    },
    {
        'category': 'Grocery',
        'subCategory': 'Foodgrains',
        'attributes': [

        ]
    },
    {
        'category': 'Grocery',
        'subCategory': 'Eggs, Meat and Fish',
        'attributes': [

        ]
    },
    {
        'category': 'Grocery',
        'subCategory': 'Cleaning and Household',
        'attributes': [
            { 'name': 'Size', 'type': 'input', 'example': '', 'variationAllowed': true },
            { 'name': 'Color', 'type': 'input', 'example': '', 'variationAllowed': true },
            { 'name': 'Style', 'type': 'input', 'example': '', 'variationAllowed': true },
            { 'name': 'Number of Items', 'type': 'number', 'example': '6', 'variationAllowed': true },
            { 'name': 'Material Type', 'type': 'input', 'example': 'plastic', 'variationAllowed': true },
            { 'name': 'Width Range', 'type': 'input', 'example': '', 'unit': unitLength },
            { 'name': 'Length Range', 'type': 'input', 'example': '', 'unit': unitLength },
        ]
    },
    {
        'category': 'Grocery',
        'subCategory': 'Beverages',
        'attributes': [
            { 'name': 'Size', 'type': 'input', 'example': '', 'variationAllowed': true },
            { 'name': 'Color', 'type': 'input', 'example': '', 'variationAllowed': true },
            { 'name': 'stylename', 'type': 'input', 'example': '', 'variationAllowed': true }
        ]
    },
    {
        'category': 'Grocery',
        'subCategory': 'Beauty and Hygiene',
        'attributes': [
            { 'name': 'Size', 'type': 'input', 'example': '', 'variationAllowed': true },
            { 'name': 'Color', 'type': 'input', 'example': '', 'variationAllowed': true },
            { 'name': 'Scent', 'type': 'input', 'example': 'rose', 'variationAllowed': true },
            { 'name': 'Number of Items', 'type': 'number', 'example': '6', 'variationAllowed': true },
            { 'name': 'PPU Count', 'type': 'input', 'example': '1', 'variationAllowed': true },
            { 'name': 'Item Form', 'type': 'input', 'example': 'Cream', 'variationAllowed': true },
            { 'name': 'Model', 'type': 'input', 'example': 'AB12', 'variationAllowed': true },
            { 'name': 'Item Weight', 'type': 'input', 'example': '5', 'unit': unitWeight },
        ]
    },
    {
        'category': 'Grocery',
        'subCategory': 'Bakery, Cakes and Dairy',
        'attributes': [
            { 'name': 'Size', 'type': 'input', 'example': 'small', 'variationAllowed': true },
            { 'name': 'Number of Items', 'type': 'number', 'example': '6', 'variationAllowed': true },
            { 'name': 'Color', 'type': 'input', 'example': '', 'variationAllowed': true },
            { 'name': 'Material Type', 'type': 'input', 'example': 'floor', 'variationAllowed': true },
            { 'name': 'Item Weight', 'type': 'input', 'example': '5', 'unit': unitWeight },
            { 'name': 'Unit Count', 'type': 'number', 'example': '6', 'variationAllowed': true },
            { 'name': 'Model', 'type': 'input', 'example': 'AB-12', 'variationAllowed': true },
            { 'name': 'Shape', 'type': 'input', 'example': 'Round', 'variationAllowed': true },
            { 'name': 'Capacity', 'type': 'float', 'example': '4', 'unit': unitCapacity },
            { 'name': 'Manufacturer Part Number', 'type': 'float', 'example': 'A-112', 'variationAllowed': true },
        ]
    },
    {
        'category': 'Grocery',
        'subCategory': 'Kitchen Accessories',
        'attributes': [
            { 'name': 'Size', 'type': 'input', 'example': 'small', 'variationAllowed': true },
            { 'name': 'Number of Items', 'type': 'number', 'example': '6', 'variationAllowed': true },
            { 'name': 'Color', 'type': 'input', 'example': '', 'variationAllowed': true },
            { 'name': 'Material Type', 'type': 'input', 'example': 'Steel', 'variationAllowed': true },
            { 'name': 'Item Weight', 'type': 'input', 'example': '5', 'unit': unitWeight },
            { 'name': 'Unit Count', 'type': 'number', 'example': '6', 'variationAllowed': true },
            { 'name': 'Model', 'type': 'input', 'example': 'AB-12', 'variationAllowed': true },
            { 'name': 'Pattern', 'type': 'input', 'example': '', 'variationAllowed': true },
        ]
    },
    {
        'category': 'Grocery',
        'subCategory': 'Baby Care',
        'attributes': [
            { 'name': 'Scent', 'type': 'input', 'example': 'rose', 'variationAllowed': true },
            { 'name': 'Scent', 'type': 'input', 'example': 'rose', 'variationAllowed': true },
            { 'name': 'Style', 'type': 'input', 'example': 'modern', 'variationAllowed': true },
            { 'name': 'Number of Items', 'type': 'number', 'example': '6', 'variationAllowed': true },
            { 'name': 'Material Type', 'type': 'input', 'example': 'rose', 'variationAllowed': true },
            { 'name': 'Color', 'type': 'input', 'example': '', 'variationAllowed': true },
            { 'name': 'PPU Count', 'type': 'input', 'example': '1', 'variationAllowed': true },
            { 'name': 'Item Form', 'type': 'input', 'example': 'Cream', 'variationAllowed': true },
            { 'name': 'Pattern', 'type': 'input', 'example': '', 'variationAllowed': true },
            { 'name': 'Item Weight', 'type': 'input', 'example': '5', 'unit': unitWeight },
            { 'name': 'Model', 'type': 'input', 'example': 'AB-12', 'variationAllowed': true },
        ]
    },
    {
        'category': 'Grocery',
        'subCategory': 'Snacks and Branded Foods',
        'attributes': [

        ]
    },
    {
        'category': 'Grocery',
        'subCategory': 'Pet Care',
        'attributes': [
            { 'name': 'Scent Name', 'type': 'input', 'example': 'mild', 'variationAllowed': true },
            { 'name': 'Flavor', 'type': 'input', 'example': '', 'variationAllowed': true },
            { 'name': 'Color', 'type': 'input', 'example': 'brown', 'variationAllowed': true },
            { 'name': 'Number of Items', 'type': 'number', 'example': '6', 'variationAllowed': true },
        ]
    },
    {
        'category': 'Grocery',
        'subCategory': 'Stationery',
        'attributes': [
            { 'name': 'Size', 'type': 'input', 'example': 'A4,6x4', 'variationAllowed': true },
            { 'name': 'Paper Size', 'type': 'input', 'example': '', 'variationAllowed': true },
            { 'name': 'Number of Items', 'type': 'number', 'example': '6', 'variationAllowed': true },
            { 'name': 'Color', 'type': 'input', 'example': '', 'variationAllowed': true },
            { 'name': 'Line Size', 'type': 'input', 'example': '', 'variationAllowed': true },
            { 'name': 'Maximum Size', 'type': 'input', 'example': '', 'variationAllowed': true },
        ]
    },

    {
        'category': 'Home Decor',
        'subCategory': 'Home Decor',
        'attributes': [
            { 'name': 'Size', 'type': 'input', 'example': 'small', 'variationAllowed': true },
            { 'name': 'Style', 'type': 'input', 'example': 'modern', 'variationAllowed': true },
            { 'name': 'Number of Items', 'type': 'number', 'example': '6', 'variationAllowed': true },
            { 'name': 'Material Type', 'type': 'input', 'example': 'wood', 'variationAllowed': true },
            { 'name': 'Pattern', 'type': 'input', 'example': 'Sripped', 'variationAllowed': true },
            { 'name': 'Item Weight', 'type': 'input', 'example': '5', 'unit': unitWeight },
            { 'name': 'Model', 'type': 'input', 'example': 'AB-12', 'variationAllowed': true },
            { 'name': 'Manufacturer Part Number', 'type': 'float', 'example': 'A-112', 'variationAllowed': true },
            { 'name': 'Color', 'type': 'input', 'example': '', 'variationAllowed': true },
            { 'name': 'Wattage', 'type': 'input', 'example': '', 'unit': unitWattage },
            { 'name': 'VoltageColor', 'type': 'input', 'example': '6', 'variationAllowed': true },
            { 'name': 'Unit Count', 'type': 'number', 'example': '6', 'variationAllowed': true },
            { 'name': 'Shape', 'type': 'input', 'example': 'Round', 'variationAllowed': true },
        ]
    },
    {
        'category': 'Home Decor',
        'subCategory': 'Home Furnishings',
        'attributes': [
            { 'name': 'Size', 'type': 'input', 'example': 'small', 'variationAllowed': true },
            { 'name': 'Style', 'type': 'input', 'example': 'modern', 'variationAllowed': true },
            { 'name': 'Number of Items', 'type': 'number', 'example': '6', 'variationAllowed': true },
            { 'name': 'Color', 'type': 'input', 'example': '', 'variationAllowed': true },
            { 'name': 'Material Type', 'type': 'input', 'example': 'wood', 'variationAllowed': true },
            { 'name': 'Pattern', 'type': 'input', 'example': 'Sripped', 'variationAllowed': true },
            { 'name': 'Display Weight', 'type': 'input', 'example': '5', 'unit': unitWeight },
        ]
    },
    {
        'category': 'Home Decor',
        'subCategory': 'Furniture',
        'attributes': [
            { 'name': 'Size', 'type': 'input', 'example': 'small', 'variationAllowed': true },
            { 'name': 'Style', 'type': 'input', 'example': 'modern', 'variationAllowed': true },
            { 'name': 'Number of Items', 'type': 'number', 'example': '6', 'variationAllowed': true },
            { 'name': 'Material Type', 'type': 'input', 'example': 'wood', 'variationAllowed': true },
            { 'name': 'Pattern', 'type': 'input', 'example': 'Sripped', 'variationAllowed': true },
            { 'name': 'Item Weight', 'type': 'input', 'example': '5', 'unit': unitWeight },
            { 'name': 'Unit Count', 'type': 'number', 'example': '6', 'variationAllowed': true },
            { 'name': 'Model', 'type': 'input', 'example': 'AB-12', 'variationAllowed': true },
            { 'name': 'Color', 'type': 'input', 'example': '', 'variationAllowed': true },
            { 'name': 'Team Name', 'type': 'input', 'example': 'chennai super kings', 'variationAllowed': true },
            { 'name': 'Shape', 'type': 'input', 'example': 'Round', 'variationAllowed': true },
        ]
    },
    {
        'category': 'Home Decor',
        'subCategory': 'Garden and Outdoor Products',
        'attributes': [
            { 'name': 'Material Type', 'type': 'input', 'example': 'wood', 'variationAllowed': true },
            { 'name': 'Color', 'type': 'input', 'example': '', 'variationAllowed': true },
        ]
    },
    {
        'category': 'Home Decor',
        'subCategory': 'Home Improvement',
        'attributes': [
            { 'name': 'Size', 'type': 'input', 'example': 'small', 'variationAllowed': true },
            { 'name': 'Style', 'type': 'input', 'example': 'modern', 'variationAllowed': true },
            { 'name': 'Number of Items', 'type': 'number', 'example': '6', 'variationAllowed': true },
            { 'name': 'Color', 'type': 'input', 'example': '', 'variationAllowed': true },
        ]
    },
    {
        'category': 'Home Decor',
        'subCategory': 'Cookware and Dining',
        'attributes': [
            { 'name': 'Size', 'type': 'input', 'example': 'small', 'variationAllowed': true },
            { 'name': 'Number of Items', 'type': 'number', 'example': '6', 'variationAllowed': true },
            { 'name': 'Material Type', 'type': 'input', 'example': 'wood', 'variationAllowed': true },
            { 'name': 'Pattern', 'type': 'input', 'example': 'Sripped', 'variationAllowed': true },
            { 'name': 'Item Weight', 'type': 'input', 'example': '5', 'unit': unitWeight },
            { 'name': 'Unit Count', 'type': 'number', 'example': '6', 'variationAllowed': true },
            { 'name': 'Model', 'type': 'input', 'example': 'AB-12', 'variationAllowed': true },
            { 'name': 'Shape', 'type': 'input', 'example': 'Round', 'variationAllowed': true },
            { 'name': 'Capacity', 'type': 'input', 'example': '', 'unit': unitCapacity },
            { 'name': 'Manufacturer Part Number', 'type': 'float', 'example': 'A-112', 'variationAllowed': true },
            { 'name': 'Color', 'type': 'input', 'example': '', 'variationAllowed': true },
        ]
    },
    {
        'category': 'Home Decor',
        'subCategory': 'Storage and Organisation',
        'attributes': [
            { 'name': 'Size', 'type': 'input', 'example': 'small', 'variationAllowed': true },
            { 'name': 'Style', 'type': 'input', 'example': 'modern', 'variationAllowed': true },
            { 'name': 'Number of Items', 'type': 'number', 'example': '6', 'variationAllowed': true },
            { 'name': 'Material Type', 'type': 'input', 'example': 'wood', 'variationAllowed': true },
            { 'name': 'Item Weight', 'type': 'input', 'example': '5', 'unit': unitWeight },
            { 'name': 'Unit Count', 'type': 'number', 'example': '6', 'variationAllowed': true },
            { 'name': 'Team Name', 'type': 'input', 'example': 'Lions', 'variationAllowed': true },
            { 'name': 'Model', 'type': 'input', 'example': 'AB-12', 'variationAllowed': true },
            { 'name': 'Color', 'type': 'input', 'example': '', 'variationAllowed': true },
            { 'name': 'Shape', 'type': 'input', 'example': 'Round', 'variationAllowed': true },
        ]
    },


    {
        'category': 'Health and Wellness',
        'subCategory': 'Pain Relieving Ointments',
        'attributes': [
            { 'name': 'Style', 'type': 'input', 'example': 'Art Deco', 'variationAllowed': true },
            { 'name': 'Material Type', 'type': 'input', 'example': 'Metal', 'variationAllowed': true },
            { 'name': 'Size', 'type': 'input', 'example': 'Large', 'variationAllowed': true },
            { 'name': 'Item Weight', 'type': 'input', 'example': '5', 'unit': unitWeight },
            { 'name': 'Model', 'type': 'input', 'example': 'AB-12', 'variationAllowed': true },
            { 'name': 'Manufacturer Part Number', 'type': 'float', 'example': 'A-112', 'variationAllowed': true },
            { 'name': 'Color', 'type': 'input', 'example': 'Grey', 'variationAllowed': true },
            { 'name': 'PPU Count', 'type': 'number', 'example': '6', 'variationAllowed': true },
        ]
    },
    {
        'category': 'Health and Wellness',
        'subCategory': 'Nutrition and Supplements',
        'attributes': [
            { 'name': 'Flavour', 'type': 'input', 'example': 'Strawberry', 'variationAllowed': true },
            { 'name': 'Size', 'type': 'input', 'example': 'small', 'variationAllowed': true },
            { 'name': 'Scent', 'type': 'input', 'example': 'musk', 'variationAllowed': true },
            { 'name': 'Number of Items', 'type': 'number', 'example': '6', 'variationAllowed': true },
            { 'name': 'Item Weight', 'type': 'input', 'example': '5', 'unit': unitWeight },
            { 'name': 'Color', 'type': 'input', 'example': '', 'variationAllowed': true },
            { 'name': 'PPU Count', 'type': 'input', 'example': '6', 'variationAllowed': true },
            { 'name': 'Model', 'type': 'input', 'example': 'EEPL 456', 'variationAllowed': true },
        ]
    },

    {
        'category': 'Health and Wellness',
        'subCategory': 'Personal and Baby Care',
        'attributes': [
            { 'name': 'Scent', 'type': 'input', 'example': 'musk', 'variationAllowed': true },
            { 'name': 'Size', 'type': 'input', 'example': 'small', 'variationAllowed': true },
            { 'name': 'Number of Items', 'type': 'number', 'example': '6', 'variationAllowed': true },
            { 'name': 'Itrm Form', 'type': 'input', 'example': 'Cream', 'variationAllowed': true },
            { 'name': 'Item Weight', 'type': 'input', 'example': '5', 'unit': unitWeight },
            { 'name': 'PPU Count', 'type': 'input', 'example': '6', 'variationAllowed': true },
            { 'name': 'Model', 'type': 'input', 'example': 'EEPL 456', 'variationAllowed': true },
        ]
    },
    {
        'category': 'Health and Wellness',
        'subCategory': 'Sexual Wellness',
        'attributes': [
            { 'name': 'Scent', 'type': 'input', 'example': 'musk', 'variationAllowed': true },
            { 'name': 'Size', 'type': 'input', 'example': 'small', 'variationAllowed': true },
            { 'name': 'Number of Items', 'type': 'number', 'example': '6', 'variationAllowed': true },
            { 'name': 'Item Form', 'type': 'input', 'example': 'Cream', 'variationAllowed': true },
            { 'name': 'Item Weight', 'type': 'input', 'example': '5', 'unit': unitWeight },
            { 'name': 'PPU Count', 'type': 'input', 'example': '6', 'variationAllowed': true },
            { 'name': 'Model', 'type': 'input', 'example': 'EEPL 456', 'variationAllowed': true },
        ]
    },
    {
        'category': 'Health and Wellness',
        'subCategory': 'Gastric and Other Concerns',
        'attributes': [
            { 'name': 'Flavour', 'type': 'input', 'example': 'Strawberry', 'variationAllowed': true },
            { 'name': 'Size', 'type': 'input', 'example': 'small', 'variationAllowed': true },
            { 'name': 'Scent', 'type': 'input', 'example': 'musk', 'variationAllowed': true },
            { 'name': 'Number of Items', 'type': 'number', 'example': '6', 'variationAllowed': true },
            { 'name': 'Item Weight', 'type': 'input', 'example': '5', 'unit': unitWeight },
            { 'name': 'Color', 'type': 'input', 'example': '', 'variationAllowed': true },
            { 'name': 'PPU Count', 'type': 'input', 'example': '6', 'variationAllowed': true },
            { 'name': 'Model', 'type': 'input', 'example': 'EEPL 456', 'variationAllowed': true },
        ]
    },
    {
        'category': 'Health and Wellness',
        'subCategory': 'Covid Essentials',
        'attributes': [
            { 'name': 'Size', 'type': 'input', 'example': 'small', 'variationAllowed': true },
            { 'name': 'Style', 'type': 'input', 'example': 'Cape Cod', 'variationAllowed': true },
            { 'name': 'Material Type', 'type': 'number', 'example': 'Cotton', 'variationAllowed': true },
            { 'name': 'Item Weight', 'type': 'input', 'example': '5', 'unit': unitWeight },
            { 'name': 'Model', 'type': 'input', 'example': 'EEPL 456', 'variationAllowed': true },
            { 'name': 'Manufacturer Part Number', 'type': 'input', 'example': 'RTC 54', 'variationAllowed': true },
            { 'name': 'Unit Count', 'type': 'number', 'example': '4', 'variationAllowed': true },
            { 'name': 'Color', 'type': 'input', 'example': '', 'variationAllowed': true },
            { 'name': 'Team Name', 'type': 'input', 'example': 'Royal', 'variationAllowed': true },
            { 'name': 'Item Shape', 'type': 'input', 'example': 'Molded cup', 'variationAllowed': true },
        ]
    },
    {
        'category': 'Health and Wellness',
        'subCategory': 'Diabetes Control',
        'attributes': [
            { 'name': 'Flavour', 'type': 'input', 'example': 'Strawberry', 'variationAllowed': true },
            { 'name': 'Size', 'type': 'input', 'example': 'small', 'variationAllowed': true },
            { 'name': 'Scent', 'type': 'input', 'example': 'musk', 'variationAllowed': true },
            { 'name': 'Item Package Quantity', 'type': 'number', 'example': '6', 'variationAllowed': true },
        ]
    },
    {
        'category': 'Health and Wellness',
        'subCategory': 'Health Devices',
        'attributes': [
            { 'name': 'Thickness', 'type': 'input', 'example': '11', 'variationAllowed': true },
            { 'name': 'Material Type', 'type': 'input', 'example': 'Steel', 'variationAllowed': true },
            { 'name': 'Model', 'type': 'input', 'example': 'EEPL 456', 'variationAllowed': true },
            { 'name': 'Shape', 'type': 'input', 'example': 'Round', 'variationAllowed': true },
            { 'name': 'Capacity', 'type': 'input', 'example': '5', 'unit': unitCapacity },
            { 'name': 'Number of Items', 'type': 'number', 'example': '6', 'variationAllowed': true },
            { 'name': 'Manufacturer Part Number', 'type': 'input', 'example': 'RTC 54', 'variationAllowed': true },
            { 'name': 'Color', 'type': 'input', 'example': '', 'variationAllowed': true },
        ]
    },

    {
        'category': 'Beauty and Personal Care',
        'subCategory': 'Bath and Body',
        'attributes': [
            { 'name': 'Size', 'type': 'input', 'example': 'small', 'variationAllowed': true },
            { 'name': 'Scent', 'type': 'input', 'example': 'Musk', 'variationAllowed': true },
            { 'name': 'Number of Items', 'type': 'number', 'example': '6', 'variationAllowed': true },
            { 'name': 'Color', 'type': 'input', 'example': '', 'variationAllowed': true },
            { 'name': 'Item Form', 'type': 'input', 'example': 'Cream', 'variationAllowed': true },
            { 'name': 'Item Weight', 'type': 'input', 'example': '5', 'unit': unitWeight },
            { 'name': 'Model', 'type': 'input', 'example': 'AB-12', 'variationAllowed': true },
            { 'name': 'PPU Count', 'type': 'input', 'example': '6', 'variationAllowed': true },
        ]
    },
    {
        'category': 'Beauty and Personal Care',
        'subCategory': 'Feminine Care',
        'attributes': [
            { 'name': 'Size', 'type': 'input', 'example': 'small', 'variationAllowed': true },
            { 'name': 'Style', 'type': 'input', 'example': 'modern', 'variationAllowed': true },
            { 'name': 'Scent', 'type': 'input', 'example': 'musk', 'variationAllowed': true },
            { 'name': 'Number of Items', 'type': 'number', 'example': '6', 'variationAllowed': true },
            { 'name': 'Material Type', 'type': 'input', 'example': 'wood', 'variationAllowed': true },
            { 'name': 'Item Form', 'type': 'input', 'example': 'Cream', 'variationAllowed': true },
            { 'name': 'Optical Power', 'type': 'input', 'example': '5', 'unit': unitOptical },
            { 'name': 'Color', 'type': 'input', 'example': 'Blue', 'variationAllowed': true },
            { 'name': 'Base Curve Radius', 'type': 'input', 'example': '5', 'unit': unitLength },
            { 'name': 'Item Diameter', 'type': 'input', 'example': '5', 'variationAllowed': true },
            { 'name': 'PPU Count', 'type': 'input', 'example': '6', 'variationAllowed': true },
            { 'name': 'Item Weight', 'type': 'input', 'example': '5', 'unit': unitWeight },
            { 'name': 'Flavour', 'type': 'input', 'example': '', 'variationAllowed': true },
            { 'name': 'Model Number', 'type': 'input', 'example': 'ER 44', 'variationAllowed': true },
            { 'name': 'Lens Addition Power', 'type': 'input', 'example': '', 'unit': unitLensPower },
            { 'name': 'Cylinder Correction', 'type': 'input', 'example': '', 'variationAllowed': true },
            { 'name': 'Cylinder Axis', 'type': 'input', 'example': 'Sripped', 'variationAllowed': true },
        ]
    },
    {
        'category': 'Beauty and Personal Care',
        'subCategory': 'Fragrance',
        'attributes': [
            { 'name': 'Style Name', 'type': 'input', 'example': 'Mision', 'variationAllowed': true },
            { 'name': 'Scent', 'type': 'input', 'example': 'Rose', 'variationAllowed': true },
            { 'name': 'Size', 'type': 'input', 'example': 'small', 'variationAllowed': true },
            { 'name': 'Number of Items', 'type': 'number', 'example': '6', 'variationAllowed': true },
            { 'name': 'Item Form', 'type': 'input', 'example': 'Gas', 'variationAllowed': true },
            { 'name': 'Item Weight', 'type': 'input', 'example': '5', 'unit': unitWeight },
            { 'name': 'Model Number', 'type': 'input', 'example': 'TTYU 6', 'variationAllowed': true },
            { 'name': 'Manufacturer Part Number', 'type': 'input', 'example': 'TTYU 6', 'variationAllowed': true },
            { 'name': 'Unit Count', 'type': 'number', 'example': '4', 'variationAllowed': true },
            { 'name': 'Volume', 'type': 'input', 'example': 'AB-12', 'unit': unitGraduation },
        ]
    },
    {
        'category': 'Beauty and Personal Care',
        'subCategory': 'Hair Care',
        'attributes': [
            { 'name': 'Scent Name', 'type': 'input', 'example': 'Spice', 'variationAllowed': true },
            { 'name': 'Size', 'type': 'input', 'example': 'small', 'variationAllowed': true },
            { 'name': 'Number of Items', 'type': 'number', 'example': '6', 'variationAllowed': true },
            { 'name': 'Color', 'type': 'input', 'example': 'Red', 'variationAllowed': true },
            { 'name': 'Item Form', 'type': 'input', 'example': 'Cream', 'variationAllowed': true },
            { 'name': 'Item Weight', 'type': 'input', 'example': '5', 'unit': unitWeight },
            { 'name': 'Model Number', 'type': 'input', 'example': 'TTYU 6', 'variationAllowed': true },
            { 'name': 'PPU Count', 'type': 'input', 'example': '6', 'variationAllowed': true },
        ]
    },
    {
        'category': 'Beauty and Personal Care',
        'subCategory': 'Make Up',
        'attributes': [
            { 'name': 'Scent', 'type': 'input', 'example': 'Spice', 'variationAllowed': true },
            { 'name': 'Size', 'type': 'input', 'example': 'small', 'variationAllowed': true },
            { 'name': 'Number of Items', 'type': 'number', 'example': '6', 'variationAllowed': true },
            { 'name': 'Color', 'type': 'input', 'example': 'Red', 'variationAllowed': true },
            { 'name': 'Item Form', 'type': 'input', 'example': 'Cream', 'variationAllowed': true },
            { 'name': 'Item Weight', 'type': 'input', 'example': '5', 'unit': unitWeight },
            { 'name': 'Model Number', 'type': 'input', 'example': 'TTYU 6', 'variationAllowed': true },
            { 'name': 'PPU Count', 'type': 'input', 'example': '6', 'variationAllowed': true },
        ]
    },
    {
        'category': 'Beauty and Personal Care',
        'subCategory': 'Men Grooming',
        'attributes': [
            { 'name': 'Scent', 'type': 'input', 'example': 'Spice', 'variationAllowed': true },
            { 'name': 'Color', 'type': 'input', 'example': 'Red', 'variationAllowed': true },
            { 'name': 'Size', 'type': 'input', 'example': 'small', 'variationAllowed': true },
            { 'name': 'Model Number', 'type': 'input', 'example': 'TTYU 6', 'variationAllowed': true },
            { 'name': 'PPU Count', 'type': 'input', 'example': '6', 'variationAllowed': true },
            { 'name': 'Team Name', 'type': 'number', 'example': 'Royal', 'variationAllowed': true }
        ]
    },
    {
        'category': 'Beauty and Personal Care',
        'subCategory': 'Oral Care',
        'attributes': [
            { 'name': 'Flavour', 'type': 'input', 'example': 'Mint', 'variationAllowed': true },
            { 'name': 'Size', 'type': 'input', 'example': 'small', 'variationAllowed': true },
            { 'name': 'Scent', 'type': 'input', 'example': 'Musk', 'variationAllowed': true },
            { 'name': 'Number of Items', 'type': 'number', 'example': '6', 'variationAllowed': true },
            { 'name': 'Color', 'type': 'input', 'example': 'Red', 'variationAllowed': true },
            { 'name': 'Item Form', 'type': 'input', 'example': 'Cream', 'variationAllowed': true },
            { 'name': 'Item Weight', 'type': 'input', 'example': '5', 'unit': unitWeight },
            { 'name': 'PPU Count', 'type': 'input', 'example': '6', 'variationAllowed': true },
            { 'name': 'Unit Count', 'type': 'number', 'example': '6', 'variationAllowed': true },
            { 'name': 'Model', 'type': 'input', 'example': 'AB-12', 'variationAllowed': true },
        ]
    },
    {
        'category': 'Beauty and Personal Care',
        'subCategory': 'Skin Care',
        'attributes': [
            { 'name': 'Scent', 'type': 'input', 'example': 'Musk', 'variationAllowed': true },
            { 'name': 'Size', 'type': 'input', 'example': 'small', 'variationAllowed': true },
            { 'name': 'Number of Items', 'type': 'number', 'example': '6', 'variationAllowed': true },
            { 'name': 'Item Form', 'type': 'input', 'example': 'Cream', 'variationAllowed': true },
            { 'name': 'Item Weight', 'type': 'input', 'example': '5', 'unit': unitWeight },
            { 'name': 'PPU Count', 'type': 'input', 'example': '6', 'variationAllowed': true },
            { 'name': 'Model', 'type': 'input', 'example': 'AB-12', 'variationAllowed': true },
        ]
    },
    {
        'category': 'Beauty and Personal Care',
        'subCategory': 'Maternity Care',
        'attributes': [
            { 'name': 'Size', 'type': 'input', 'example': 'small', 'variationAllowed': true },
            { 'name': 'Style', 'type': 'input', 'example': 'modern', 'variationAllowed': true },
            { 'name': 'Number of Items', 'type': 'number', 'example': '6', 'variationAllowed': true },
            { 'name': 'Material Type', 'type': 'input', 'example': 'wood', 'variationAllowed': true },
            { 'name': 'Color', 'type': 'input', 'example': '', 'variationAllowed': true },
        ]
    },
    {
        'category': 'Beauty and Personal Care',
        'subCategory': 'Nursing and Feeding',
        'attributes': [
            { 'name': 'Size', 'type': 'input', 'example': 'Small', 'variationAllowed': true },
            { 'name': 'Shape', 'type': 'input', 'example': 'Round', 'variationAllowed': true },
            { 'name': 'Pattern', 'type': 'input', 'example': 'Striped', 'variationAllowed': true },
            { 'name': 'Item Weight', 'type': 'input', 'example': '5', 'unit': unitWeight },
            { 'name': 'Unit Count', 'type': 'number', 'example': '6', 'variationAllowed': true },
            { 'name': 'Model', 'type': 'input', 'example': 'AB-12', 'variationAllowed': true },
        ]
    },
    {
        'category': 'Beauty and Personal Care',
        'subCategory': 'Sexual Wellness and Sensuality',
        'attributes': [
            { 'name': 'Scent', 'type': 'input', 'example': 'musk', 'variationAllowed': true },
            { 'name': 'Size', 'type': 'input', 'example': 'small', 'variationAllowed': true },
            { 'name': 'Number of Items', 'type': 'number', 'example': '6', 'variationAllowed': true },
            { 'name': 'Item Form', 'type': 'input', 'example': 'Cream', 'variationAllowed': true },
            { 'name': 'Item Weight', 'type': 'input', 'example': '5', 'unit': unitWeight },
            { 'name': 'PPU Count', 'type': 'input', 'example': '6', 'variationAllowed': true },
            { 'name': 'Model', 'type': 'input', 'example': 'EEPL 456', 'variationAllowed': true },
        ]
    },
    {
        'category': 'Beauty and Personal Care',
        'subCategory': 'Tools and Accessories',
        'attributes': [
            { 'name': 'Size', 'type': 'input', 'example': 'small', 'variationAllowed': true },
            { 'name': 'Style', 'type': 'input', 'example': 'modern', 'variationAllowed': true },
            { 'name': 'Number of Items', 'type': 'number', 'example': '6', 'variationAllowed': true },
            { 'name': 'Material Type', 'type': 'input', 'example': 'wood', 'variationAllowed': true },
            { 'name': 'Item Weight', 'type': 'input', 'example': '5', 'unit': unitWeight },
            { 'name': 'Model', 'type': 'input', 'example': 'AB-12', 'variationAllowed': true },
            { 'name': 'Unit Count', 'type': 'number', 'example': '6', 'variationAllowed': true },
            { 'name': 'Item Shape', 'type': 'input', 'example': 'Round', 'variationAllowed': true },
            { 'name': 'Manufacturer Part Number', 'type': 'input', 'example': 'ABT 243', 'variationAllowed': true },
        ]
    },

    {
        'category': 'Food and Beverages',
        'subCategory': 'Food and Beverages',
        'attributes': [

        ]
    },

];

module.exports = {
    Categories, SubCategories, Attributes
};











