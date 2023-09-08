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
            {value: "mens_fashion_accessories", key: "Men's Fashion Accessories", protocolKey: ''},
            {value: "mens_footwear_accessories", key: "Men's Footwear Accessories", protocolKey: ''},
            {value: "mens_topwear", key: "Men's Topwear", protocolKey: ''},
            {value: "mens_bottomwear", key: "Men's Bottomwear", protocolKey: ''},
            {value: "mens_innerwear_and_sleepwear", key: "Men's Innerwear & Sleepwear", protocolKey: ''},
            {value: "mens_bags_and_luggage", key: "Men's Bags & Luggage", protocolKey: ''},
            {value: "mens_eyewear", key: "Men's Eyewear", protocolKey: ''},
            {value: "mens_footwear", key: "Men's Footwear", protocolKey: ''},
            {value: "mens_jewellery", key: "Men's Jewellery", protocolKey: ''},
            {value: "womens_fashion_accessories", key: "Women's Fashion Accessories", protocolKey: ''},
            {value: "womens_footwear_accessories", key: "Women's Footwear Accessories", protocolKey: ''},
            {value: "womens_indian_and_dusion_wear", key: "Women's Indian & Fusion Wear", protocolKey: ''},
            {value: "womens_western_wear", key: "Women's Western Wear", protocolKey: ''},
            {value: "womens_lingerie_and_sleepwear", key: "Women's Lingerie & Sleepwear", protocolKey: ''},
            {value: "womens_bags_and_luggage", key: "Women's Bags & Luggage", protocolKey: ''},
            {value: "womens_eyewear", key: "Women's Eyewear", protocolKey: ''},
            {value: "womens_footwear", key: "Women's Footwear", protocolKey: ''},
            {value: "womens_jewellery", key: "Women's Jewellery", protocolKey: ''},
            {value: "boys_clothing", key: "Boy's Clothing", protocolKey: ''},
            {value: "boys_footwear", key: "Boy's Footwear", protocolKey: ''},
            {value: "girls_clothing", key: "Girl's Clothing", protocolKey: ''},
            {value: "girls_footwear", key: "Girl's Footwear", protocolKey: ''},
            {value: "infants_wear", key: "Infant's Wear", protocolKey: ''},
            {value: "infant_care_and_accessories", key: "Infant Care & Accessories", protocolKey: ''},
            {value: "infant_feeding_and_nursing_essentials", key: "Infant Feeding & Nursing Essentials", protocolKey: ''},
            {value: "infant_bath_accessories", key: "Infant Bath Accessories", protocolKey: ''},
            {value: "infant_health_and_safety", key: "Infant Health & Safety", protocolKey: ''},
            {value: "infant_diapers_and_toilet_training", key: "Infant Diapers & Toilet Training", protocolKey: ''},
            {value: "kids_towels_and_wrappers", key: "Kid's Towels & Wrappers", protocolKey: ''},
            {value: "kids_fashion_accessories", key: "Kid's Fashion Accessories", protocolKey: ''},
            {value: "kids_jewellery", key: "Kid's Jewellery", protocolKey: ''},
            {value: "kids_eyewear", key: "Kid's Eyewear", protocolKey: ''},
            {value: "kids _bags_and_luggage", key: "Kid's Bags & Luggage", protocolKey: ''},
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
            {value: 'home_decor', key: 'Home Decor', protocolKey: ''},
            {value: 'home_furnishings', key: 'Home Furnishings', protocolKey: ''},
            {value: 'furniture', key: 'Furniture', protocolKey: ''},
            {value: 'garden_and_outdoor_products', key: 'Garden and Outdoor Products', protocolKey: ''},
            {value: 'home_improvement', key: 'Home Improvement', protocolKey: ''},
            {value: 'cookware_and_dining', key: 'Cookware and Dining', protocolKey: ''},
            {value: 'storage_and_organisation', key: 'Storage and Organisation', protocolKey: ''},
        ]
    },
    {
        'category': 'Health and Wellness',
        'subCategories': [
            {value: 'pain_relieving_ointments', key: 'Pain Relieving Ointments', protocolKey: ''},
            {value: 'nutrition_and_supplements', key: 'Nutrition and Supplements', protocolKey: ''},
            {value: 'personal_and_baby_care', key: 'Personal and Baby Care', protocolKey: ''},
            {value: 'sexual_wellness', key: 'Sexual Wellness', protocolKey: ''},
            {value: 'gastric_and_other_concerns', key: 'Gastric and Other Concerns', protocolKey: ''},
            {value: 'covid_essentials', key: 'Covid Essentials', protocolKey: ''},
            {value: 'diabetes_control', key: 'Diabetes Control', protocolKey: ''},
            {value: 'health_devices', key: 'Health Devices', protocolKey: ''},
        ]
    },
    {
        'category': 'Beauty and Personal Care',
        'subCategories': [
            {value: 'bath_and_body', key: 'Bath & Body', protocolKey: ''},
            {value: 'feminine_care', key: 'Feminine Care', protocolKey: ''},
            {value: 'fragrance', key: 'Fragrance', protocolKey: ''},
            {value: 'hair_care', key: 'Hair Care', protocolKey: ''},
            {value: 'make_up', key: 'Make Up', protocolKey: ''},
            {value: 'mens_grooming', key: "Men's Grooming", protocolKey: ''},
            {value: 'oral_care', key: 'Oral Care', protocolKey: ''},
            {value: 'skin_care', key: 'Skin Care', protocolKey: ''},
            {value: 'maternity_care', key: 'Maternity Care', protocolKey: ''},
            {value: 'baby_care', key: 'Baby Care', protocolKey: ''},
            {value: 'nursing_and_feeding', key: 'Nursing & Feeding', protocolKey: ''},
            {value: 'sexual_wellness_and_sensuality', key: 'Sexual Wellness & Sensuality', protocolKey: ''},
            {value: 'tools_and_accessories', key: 'Tools & Accessories', protocolKey: ''},
        ]
    },
    {
        'category': 'Food and Beverages',
        'subCategories': [
            {value: 'continental', key: 'Continental', protocolKey: ''},
            {value: 'middle_eastern', key: 'Middle Eastern', protocolKey: ''},
            {value: 'north_indian', key: 'North Indian', protocolKey: ''},
            {value: 'pan_asian', key: 'Pan-Asian', protocolKey: ''},
            {value: 'regional_indian', key: 'Regional Indian', protocolKey: ''},
            {value: 'south_indian', key: 'South Indian', protocolKey: ''},
            {value: 'tex_mexican', key: 'Tex-Mexican', protocolKey: ''},
            {value: 'world_cuisines', key: 'World Cuisines', protocolKey: ''},
            {value: 'healthy_food', key: 'Healthy Food', protocolKey: ''},
            {value: 'fast_food', key: 'Fast Food', protocolKey: ''},
            {value: 'desserts', key: 'Desserts', protocolKey: ''},
            {value: 'bakes_and_cakes', key: 'Bakes & Cakes', protocolKey: ''},
            {value: 'beverages', key: 'Beverages (MTO)', protocolKey: ''},
            {value: 'baklava', key: 'Baklava', protocolKey: ''},
            {value: 'bao', key: 'bao', protocolKey: ''},
            {value: 'barbecue', key: 'Barbecue', protocolKey: ''},
            {value: 'biryani', key: 'Biryani', protocolKey: ''},
            {value: 'bread', key: 'Bread', protocolKey: ''},
            {value: 'burger', key: 'Burger', protocolKey: ''},
            {value: 'Chaat', key: 'Chaat', protocolKey: ''},
            {value: 'cheesecakes', key: 'Cheesecakes', protocolKey: ''},
            {value: 'chicken', key: 'Chicken', protocolKey: ''},
            {value: 'chicken wings', key: 'Chicken wings', protocolKey: ''},
            {value: 'chips', key: 'Chips', protocolKey: ''},
            {value: 'coffee', key: 'Coffee', protocolKey: ''},
            {value: 'cookies', key: 'Cookies', protocolKey: ''},
            {value: 'crepes', key: 'Crepes', protocolKey: ''},
            {value: 'dal', key: 'Dal', protocolKey: ''},
            {value: 'dhokla', key: 'Dhokla', protocolKey: ''},
            {value: 'dosa', key: 'Dosa', protocolKey: ''},
            {value: 'eggs', key: 'Eggs', protocolKey: ''},
            {value: 'energy_drinks', key: 'Energy Drinks', protocolKey: ''},
            {value: 'falafel', key: 'Falafel', protocolKey: ''},
            {value: 'fresh_juice', key: 'Fresh Juice', protocolKey: ''},
            {value: 'fries', key: 'Fries', protocolKey: ''},
            {value: 'ice_cream', key: 'Ice cream', protocolKey: ''},
            {value: 'idli', key: 'Idli', protocolKey: ''},
            {value: 'kabab', key: 'Kabab', protocolKey: ''},
            {value: 'kachori', key: 'Kachori', protocolKey: ''},
            {value: 'kulfi', key: 'Kulfi', protocolKey: ''},
            {value: 'lassi', key: 'Lassi', protocolKey: ''},
            {value: 'meal_bowl', key: 'Meal bowl', protocolKey: ''},
            {value: 'mezze', key: 'Mezze', protocolKey: ''},
            {value: 'mithai', key: 'Mithai', protocolKey: ''},
            {value: 'momos', key: 'Momos', protocolKey: ''},
            {value: 'mutton', key: 'Mutton', protocolKey: ''},
            {value: 'nachos', key: 'Nachos', protocolKey: ''},
            {value: 'noodles', key: 'Noodles', protocolKey: ''},
            {value: 'pakodas', key: 'Pakodas', protocolKey: ''},
            {value: 'pancakes', key: 'Pancakes', protocolKey: ''},
            {value: 'paneer', key: 'Paneer', protocolKey: ''},
            {value: 'pasta', key: 'Pasta', protocolKey: ''},
            {value: 'pastries', key: 'Pastries', protocolKey: ''},
            {value: 'pie', key: 'Pie', protocolKey: ''},
            {value: 'pizza', key: 'Pizza', protocolKey: ''},
            {value: 'poha', key: 'Poha', protocolKey: ''},
            {value: 'raita', key: 'Raita', protocolKey: ''},
            {value: 'rice', key: 'Rice', protocolKey: ''},
            {value: 'rolls', key: 'Rolls', protocolKey: ''},
            {value: 'roti', key: 'Roti', protocolKey: ''},
            {value: 'salad', key: 'Salad', protocolKey: ''},
            {value: 'samosa', key: 'Samosa', protocolKey: ''},
            {value: 'sandwich', key: 'Sandwich', protocolKey: ''},
            {value: 'seafood', key: 'Seafood', protocolKey: ''},
            {value: 'shakes_&_smoothies', key: 'Shakes & Smoothies', protocolKey: ''},
            {value: 'soft_drink', key: 'Soft Drink', protocolKey: ''},
            {value: 'soup', key: 'Soup', protocolKey: ''},
            {value: 'spring_roll', key: 'Spring Roll', protocolKey: ''},
            {value: 'sushi', key: 'Sushi', protocolKey: ''},
            {value: 'tacos', key: 'Tacos', protocolKey: ''},
            {value: 'tandoori', key: 'Tandoori', protocolKey: ''},
            {value: 'tart', key: 'Tart', protocolKey: ''},
            {value: 'tea', key: 'Tea', protocolKey: ''},
            {value: 'thali', key: 'Thali', protocolKey: ''},
            {value: 'tikka', key: 'Tikka', protocolKey: ''},
            {value: 'upma', key: 'Upma', protocolKey: ''},
            {value: 'uttapam', key: 'Uttapam', protocolKey: ''},
            {value: 'vada', key: 'Vada', protocolKey: ''},
            {value: 'vegetables', key: 'Vegetables', protocolKey: ''},
            {value: 'waffle', key: 'Waffle', protocolKey: ''},
            {value: 'wrap', key: 'Wrap', protocolKey: ''},
            {value: 'yogurt', key: 'Yogurt', protocolKey: ''}
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
            { 'name': 'Unit Count', 'type': 'input', 'example': '', 'variationAllowed': true },
            { 'name': 'Voltage', 'type': 'input', 'example': '', 'variationAllowed': true },
            { 'name': 'Team Name', 'type': 'input', 'example': '', 'variationAllowed': true },
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











