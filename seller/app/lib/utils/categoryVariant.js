const unitWeight = ['LB', 'KG', 'GR', 'Hundredths Pounds', 'MG', 'Tons', 'OZ'];
const unitWattage = ['Watt', 'Hours', 'Picowatts', 'Milliamp Hours', 'Milliwatts', 'Microwatts', 'Kilowatt Hours', 'Kilowatts', 'Nanowatts', 'Watts'];
const unitMemory = ['MB', 'GB', 'TB'];
const unitLength = ['FT', 'CM', 'MM', 'DM', 'Picometre', 'µM', 'M', 'Miles', 'Yards', 'Mils', 'IN', 'Nanometre', 'Hundredths-Inches', 'Kilometres', 'Angstrom'];
const unitCapacity = ['liters', 'Quarts', 'Fluid Ounces', 'ounces', 'milliliters', 'Cubic Feet', 'Microliters', 'Cubic Centimeters', 'Pints', 'Gallons', 'pounds', 'Tons', 'Cubic Inches', 'kilograms'];
const unitOptical = ['diopters'];
const unitLensPower = ['milliwatts', 'microwatts', 'horsepower', 'nanowatts', 'picowatts', 'watts'];
const unitGraduation = ['Feet', 'centimeters', 'millimeters', 'Decimeters', 'Pints', 'Inches', 'gallons', 'Cubic Meters', 'nanometer', 'Hundredths-Inches', 'Ten Thousandths Inches', 'Cubic Centimeters', 'Quarts', 'picometer', 'milliliters', 'Kilometers', 'Fluid Ounces', 'Cubic Yards', 'Meters', 'micrometer', 'Cubic Inches', 'Imperial Gallons', 'Yards', 'Cubic Feet', 'Miles', 'Thousandths Inches', 'liters', 'Angstrom'];

const Categories = ['Electronics', 'Fashion', 'Grocery', 'Appliances', 'Home and Kitchen', 'Health and Wellness', 'Beauty and Personal Care', 'Food and Beverages'];

const SubCategories = [
    {
        'category': 'Electronics',
        'subCategories': [
            {
                value: "Mobile Phone",
                key: "Mobile Phone",
                protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            },
            {
                value: "Smart Watch",
                key: "Smart Watch",
                protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            },
            {
                value: "Headset",
                key: "Headset",
                protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            },
            {
                value: "Laptop",
                key: "Laptop",
                protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            },
            {
                value: "Desktop",
                key: "Desktop",
                protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            },
            {
                value: "Tablet",
                key: "Tablet",
                protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            },
            {
                value: "Keyboard",
                key: "Keyboard",
                protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            },
            {
                value: "Monitor",
                key: "Monitor",
                protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            },
            {
                value: "Mouse",
                key: "Mouse",
                protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            },
            {
                value: "Power Bank",
                key: "Power Bank",
                protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            },
        ]
    },
    {
        'category': 'Fashion',
        'subCategories': [
            {
                value: "Shirts",
                key: "Shirts",
                protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            },
            {
                value: "T Shirts",
                key: "T Shirts",
                protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            },
            {
                value: "Sweatshirts",
                key: "Sweatshirts",
                protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            },
            {
                value: "Kurtas & Kurta Sets",
                key: "Kurtas & Kurta Sets",
                protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            },
            {
                value: "Jackets & Coats",
                key: "Jackets & Coats",
                protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            },
            {
                value: "Sweaters",
                key: "Sweaters",
                protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            },
            {
                value: "Suits",
                key: "Suits",
                protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            },
            {
                value: "Sherwanis",
                key: "Sherwanis",
                protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            },
            {
                value: "Track Shirts",
                key: "Track Shirts",
                protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            },
            {
                value: "Track Suits",
                key: "Track Suits",
                protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            },
            {
                value: "Unstitched Fabrics",
                key: "Unstitched Fabrics",
                protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            },
            {
                value: "Dresses",
                key: "Dresses",
                protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            },
            {
                value: "Tops",
                key: "Tops",
                protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            },
            {
                value: "Trousers",
                key: "Trousers",
                protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            },
            {
                value: "Capris",
                key: "Capris",
                protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            },
            {
                value: "Coordinates",
                key: "Coordinates",
                protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            },
            {
                value: "Playsuits",
                key: "Playsuits",
                protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            },
            {
                value: "Jumpsuits",
                key: "Jumpsuits",
                protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            },
            {
                value: "Shrugs & Blouses",
                key: "Shrugs & Blouses",
                protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            },
            {
                value: "Blazers & Waistcoats",
                key: "Blazers & Waistcoats",
                protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            },
            {
                value: "Tights, Leggings & Jeggings",
                key: "Tights, Leggings & Jeggings",
                protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            },
            {
                value: "Track Pants",
                key: "Track Pants",
                protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            },
            {
                value: "Jeans",
                key: "Jeans",
                protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            },
            {
                value: "Shorts",
                key: "Shorts",
                protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            },
            {
                value: "Joggers",
                key: "Joggers",
                protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            },
            {
                value: "Dhotis & Dhoti Pants",
                key: "Dhotis & Dhoti Pants",
                protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            },
            {
                value: "Churidars",
                key: "Churidars",
                protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            },
            {
                value: "Salwars",
                key: "Salwars",
                protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            },
            {
                value: "Dungarees & Jumpsuits",
                key: "Dungarees & Jumpsuits",
                protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            },
            {
                value: "Skirts",
                key: "Skirts",
                protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            },
            {
                value: "Clothing Sets",
                key: "Clothing Sets",
                protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            },
            {
                value: "Belts",
                key: "Belts",
                protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            },
            {
                value: "Caps & Hats",
                key: "Caps & Hats",
                protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            },
            {
                value: "Kurtis, Tunics",
                key: "Kurtis, Tunics",
                protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            },
            {
                value: "Sarees",
                key: "Sarees",
                protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            },
            {
                value: "Ethnic Wear",
                key: "Ethnic Wear",
                protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            },
            {
                value: "Palazzos",
                key: "Palazzos",
                protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            },
            {
                value: "Dress Materials",
                key: "Dress Materials",
                protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            },
            {
                value: "Lehenga Cholis",
                key: "Lehenga Cholis",
                protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            },
            {
                value: "Dupattas & Shawls",
                key: "Dupattas & Shawls",
                protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            },
            {
                value: "Burqas & Hijabs",
                key: "Burqas & Hijabs",
                protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            },
            {
                value: "Blouses",
                key: "Blouses",
                protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            },
            {
                value: "Blouse Pieces",
                key: "Blouse Pieces",
                protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            },
            {
                value: "Briefs",
                key: "Briefs",
                protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            },
            {
                value: "Boxers",
                key: "Boxers",
                protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            },
            {
                value: "Vests",
                key: "Vests",
                protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            },
            {
                value: "Robes",
                key: "Robes",
                protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            },
            {
                value: "Night Suits",
                key: "Night Suits",
                protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            },
            {
                value: "Thermal Wear",
                key: "Thermal Wear",
                protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            },
            {
                value: "Swim Bottoms",
                key: "Swim Bottoms",
                protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            },
            {
                value: "Swimwear",
                key: "Swimwear",
                protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            },
            {
                value: "Bra",
                key: "Bra",
                protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            },
            {
                value: "Shapewear",
                key: "Shapewear",
                protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            },
            {
                value: "Sleepwear & Loungewear",
                key: "Sleepwear & Loungewear",
                protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            },
            {
                value: "Camisoles",
                key: "Camisoles",
                protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            },
            {
                value: "Lingerie Sets & Accessories",
                key: "Lingerie Sets & Accessories",
                protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            },
            {
                value: "Bath Robes",
                key: "Bath Robes",
                protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            },
            {
                value: "Towels",
                key: "Towels",
                protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            },
            {
                value: "Pyjamas",
                key: "Pyjamas",
                protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            },
            {
                value: "Party Wear",
                key: "Party Wear",
                protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            },
            {
                value: "Innerwear & Sleepwear",
                key: "Innerwear & Sleepwear",
                protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            },
            {
                value: "Nightwear & Loungewear",
                key: "Nightwear & Loungewear",
                protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            },
            {
                value: "Watches",
                key: "Watches",
                protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            },
            {
                value: "Gloves",
                key: "Gloves",
                protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            },
            {
                value: "Socks",
                key: "Socks",
                protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            },
            {
                value: "Stockings",
                key: "Stockings",
                protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            },
            {
                value: "Laces",
                key: "Laces",
                protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            },
            {
                value: "Soles & Charms",
                key: "Soles & Charms",
                protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            },
            {
                value: "Shoe Racks & Organisers",
                key: "Shoe Racks & Organisers",
                protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            },
            {
                value: "Shoe Care - Accessories",
                key: "Shoe Care - Accessories",
                protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            },
            {
                value: "Flip-Flops & Flats",
                key: "Flip-Flops & Flats",
                protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            },
            {
                value: "Sandals & Floaters",
                key: "Sandals & Floaters",
                protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            },
            {
                value: "Backpacks",
                key: "Backpacks",
                protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            },
            {
                value: "Handbags",
                key: "Handbags",
                protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            },
            {
                value: "Trolley, Luggage & Suitcases",
                key: "Trolley, Luggage & Suitcases",
                protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            },
            {
                value: "Formal Shoes",
                key: "Formal Shoes",
                protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            },
            {
                value: "Casual Shoes",
                key: "Casual Shoes",
                protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            },
            {
                value: "Sports Shoes",
                key: "Sports Shoes",
                protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            },
            {
                value: "Outdoor Shoes",
                key: "Outdoor Shoes",
                protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            },
            {
                value: "Work & Safety Shoes",
                key: "Work & Safety Shoes",
                protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            },
            {
                value: "Ethnic Shoes",
                key: "Ethnic Shoes",
                protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            },
            {
                value: "Boots",
                key: "Boots",
                protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            },
            {
                value: "Heels",
                key: "Heels",
                protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            },
            {
                value: "Contact Lenses",
                key: "Contact Lenses",
                protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            },
            {
                value: "Eye Glasses",
                key: "Eye Glasses",
                protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            },
            {
                value: "Eye Glass Frames",
                key: "Eye Glass Frames",
                protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            },
            {
                value: "Sunglasses",
                key: "Sunglasses",
                protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            },
            {
                value: "Contact Lens Cases",
                key: "Contact Lens Cases",
                protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            },
            {
                value: "Contact Lens Solutions",
                key: "Contact Lens Solutions",
                protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            },
            {
                value: "Contact Lens Tweezers",
                key: "Contact Lens Tweezers",
                protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            },
            {
                value: "Eyeglasses Pouches & Cases",
                key: "Eyeglasses Pouches & Cases",
                protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            },
            {
                value: "Microfiber Wipes",
                key: "Microfiber Wipes",
                protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            },
            {
                value: "Eyewear Slings",
                key: "Eyewear Slings",
                protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            },
            {
                value: "Bracelets",
                key: "Bracelets",
                protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            },
            {
                value: "Chains",
                key: "Chains",
                protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            },
            {
                value: "Mangalsutra",
                key: "Mangalsutra",
                protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            },
            {
                value: "Anklets",
                key: "Anklets",
                protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            },
            {
                value: "Bangles & Bracelets",
                key: "Bangles & Bracelets",
                protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            },
            {
                value: "Necklaces",
                key: "Necklaces",
                protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            },
            {
                value: "Earrings",
                key: "Earrings",
                protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            },
            {
                value: "Jewellery Sets",
                key: "Jewellery Sets",
                protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            },
            {
                value: "Nosepins & Noserings",
                key: "Nosepins & Noserings",
                protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            },
            {
                value: "Pendants",
                key: "Pendants",
                protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            },
            {
                value: "Rings",
                key: "Rings",
                protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            },
            {
                value: "Toe Rings",
                key: "Toe Rings",
                protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            },
            {
                value: "Gold Coins",
                key: "Gold Coins",
                protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            },
            {
                value: "Brooch",
                key: "Brooch",
                protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            },
        ]
    },
    {
        'category': 'Grocery',
        'subCategories': [
            {
                value: "Fruits and Vegetables",
                key: "Fruits and Vegetables",
                protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            },
            {
                value: "Masala & Seasoning",
                key: "Masala & Seasoning",
                protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            },
            {
                value: "Oil & Ghee",
                key: "Oil & Ghee",
                protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            },
            {
                value: "Eggs, Meat & Fish",
                key: "Eggs, Meat & Fish",
                protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            },
            {
                value: "Cleaning & Household",
                key: "Cleaning & Household",
                protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            },
            {
                value: "Bakery, Cakes & Dairy",
                key: "Bakery, Cakes & Dairy",
                protocolKey: "@ondc/org/statutory_reqs_prepackaged_food",
            },
            {
                value: "Pet Care",
                key: "Pet Care",
                protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            },
            {
                value: "Stationery",
                key: "Stationery",
                protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            },
            {
                value: "Dairy and Cheese",
                key: "Dairy and Cheese",
                protocolKey: "@ondc/org/statutory_reqs_prepackaged_food",
            },
            {
                value: "Snacks, Dry Fruits, Nuts",
                key: "Snacks, Dry Fruits, Nuts",
                protocolKey: "@ondc/org/statutory_reqs_prepackaged_food",
            },
            {
                value: "Pasta, Soup and Noodles",
                key: "Pasta, Soup and Noodles",
                protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            },
            {
                value: "Cereals and Breakfast",
                key: "Cereals and Breakfast",
                protocolKey: "@ondc/org/statutory_reqs_prepackaged_food",
            },
            {
                value: "Sauces, Spreads and Dips",
                key: "Sauces, Spreads and Dips",
                protocolKey: "@ondc/org/statutory_reqs_prepackaged_food",
            },
            {
                value: "Chocolates and Biscuits",
                key: "Chocolates and Biscuits",
                protocolKey: "@ondc/org/statutory_reqs_prepackaged_food",
            },
            {
                value: "Cooking and Baking Needs",
                key: "Cooking and Baking Needs",
                protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            },
            {
                value: "Tinned and Processed Food",
                key: "Tinned and Processed Food",
                protocolKey: "@ondc/org/statutory_reqs_prepackaged_food",
            },
            {
                value: "Atta, Flours and Sooji",
                key: "Atta, Flours and Sooji",
                protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            },
            {
                value: "Rice and Rice Products",
                key: "Rice and Rice Products",
                protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            },
            {
                value: "Dals and Pulses",
                key: "Dals and Pulses",
                protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            },
            {
                value: "Salt, Sugar and Jaggery",
                key: "Salt, Sugar and Jaggery",
                protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            },
            {
                value: "Energy and Soft Drinks",
                key: "Energy and Soft Drinks",
                protocolKey: "@ondc/org//statutory_reqs_prepackaged_food",
            },
            {
                value: "Water",
                key: "Water",
            },
            {
                value: "Tea and Coffee",
                key: "Tea and Coffee",
                protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            },
            {
                value: "Fruit Juices and Fruit Drinks",
                key: "Fruit Juices and Fruit Drinks",
                protocolKey: "@ondc/org//statutory_reqs_prepackaged_food",
            },
            {
                value: "Snacks and Namkeen",
                key: "Snacks and Namkeen",
                protocolKey: "@ondc/org//statutory_reqs_prepackaged_food",
            },
            {
                value: "Ready to Cook and Eat",
                key: "Ready to Cook and Eat",
                protocolKey: "@ondc/org//statutory_reqs_prepackaged_food",
            },
            {
                value: "Pickles and Chutney",
                key: "Pickles and Chutney",
                protocolKey: "@ondc/org//statutory_reqs_prepackaged_food",
            },
            {
                value: "Indian Sweets",
                key: "Indian Sweets",
                protocolKey: "@ondc/org//statutory_reqs_prepackaged_food",
            },
            {
                value: "Frozen Vegetables",
                key: "Frozen Vegetables",
                protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            },
            {
                value: "Frozen Snacks",
                key: "Frozen Snacks",
                protocolKey: "@ondc/org//statutory_reqs_prepackaged_food",
            },
            {
                value: "Gift Voucher",
                key: "Gift Voucher",
                protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            },
        ]
    },
    {
        'category': 'Appliances',
        'subCategories': [
            {
                value: "Audio",
                key: "Audio",
                protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            },
            {
                value: "Camera and Camcorder",
                key: "Camera and Camcorder",
                protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            },
            {
                value: "Safety Security",
                key: "Safety Security",
                protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            },
            {
                value: "Speaker",
                key: "Speaker",
                protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            },
            {
                value: "Television",
                key: "Television",
                protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            },
            {
                value: "Video",
                key: "Video",
                protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            },
            {
                value: "Air Conditioning and Air Cleaners",
                key: "Air Conditioning and Air Cleaners",
                protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            },
            {
                value: "Health, Home and Personal Care",
                key: "Health, Home and Personal Care",
                protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            },
            {
                value: "Heaters",
                key: "Heaters",
                protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            },
            {
                value: "Kitchen Appliances",
                key: "Kitchen Appliances",
                protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            },
            {
                value: "Lighting & Electric Fans",
                key: "Lighting & Electric Fans",
                protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            },
            {
                value: "Refrigerators and Freezers",
                key: "Refrigerators and Freezers",
                protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            },
            {
                value: "Vacuum Cleaners",
                key: "Vacuum Cleaners",
                protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            },
            {
                value: "Washing Machines and Accessories",
                key: "Washing Machines and Accessories",
                protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            },
            {
                value: "Water Purifiers and Coolers",
                key: "Water Purifiers and Coolers",
                protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            },
            {
                value: "Inverter & Stabilizer",
                key: "Inverter & Stabilizer",
                protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            },
        ]
    },
    {
        'category': 'Home and Kitchen',
        'subCategories': [
            {
                value: "Home Decor",
                key: "Home Decor",
                protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            },
            {
                value: "Furniture",
                key: "Furniture",
                protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            },
            {
                value: "Home Furnishing - Bedding and Linen",
                key: "Home Furnishing - Bedding and Linen",
                protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            },
            {
                value: "Cleaning Supplies",
                key: "Cleaning Supplies",
                protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            },
            {
                value: "Electricals",
                key: "Electricals",
                protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            },
            {
                value: "Bathroom and Kitchen fixtures",
                key: "Bathroom and Kitchen fixtures",
                protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            },
            {
                value: "Garden & Outdoor",
                key: "Garden & Outdoor",
                protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            },
            {
                value: "Sports and Fitness Equipment",
                key: "Sports and Fitness Equipment",
                protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            },
            {
                value: "Cookware",
                key: "Cookware",
                protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            },
            {
                value: "Serveware",
                key: "Serveware",
                protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            },
            {
                value: "Kitchen Storage and Containers",
                key: "Kitchen Storage and Containers",
                protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            },
            {
                value: "Kitchen Tools",
                key: "Kitchen Tools",
                protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            },
            {
                value: "Closet/Laundry/Shoe Organization",
                key: "Closet/Laundry/Shoe Organization",
                protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            },
            {
                value: "Toys and Games",
                key: "Toys and Games",
                protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            },
            {
                value: "Stationery",
                key: "Stationery",
                protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            },
            {
                value: "Gift Voucher",
                key: "Gift Voucher",
                protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            },
        ]
    },
    {
        'category': 'Health and Wellness',
        'subCategories': [
            {
                value: "Pain Relief",
                key: "Pain Relief",
                protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            },
            {
                value: "Nutrition and Fitness Supplements",
                key: "Nutrition and Fitness Supplements",
                protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            },
            {
                value: "Speciality Care",
                key: "Speciality Care",
                protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            },
            {
                value: "Covid Essentials",
                key: "Covid Essentials",
                protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            },
            {
                value: "Diabetes Control",
                key: "Diabetes Control",
                protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            },
            {
                value: "Healthcare & Fitness Devices",
                key: "Healthcare & Fitness Devices",
                protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            },
            {
                value: "Ayurvedic",
                key: "Ayurvedic",
                protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            },
            {
                value: "Homeopathy",
                key: "Homeopathy",
                protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            },
            {
                value: "Unani and Siddha",
                key: "Unani and Siddha",
                protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            },
            {
                value: "Elder Care",
                key: "Elder Care",
                protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            },
            {
                value: "Baby Care",
                key: "Baby Care",
                protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            },
            {
                value: "Orthopaedic Care",
                key: "Orthopaedic Care",
                protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            },
            {
                value: "Mobility Aids",
                key: "Mobility Aids",
                protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            },
            {
                value: "Medicated Hair Care",
                key: "Medicated Hair Care",
                protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            },
            {
                value: "Medicated Skin Care",
                key: "Medicated Skin Care",
                protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            },
            {
                value: "Speciality Face Cleansers",
                key: "Speciality Face Cleansers",
                protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            },
            {
                value: "Gastric Care",
                key: "Gastric Care",
                protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            },
            {
                value: "ENT Care",
                key: "ENT Care",
                protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            },
            {
                value: "Eye Care",
                key: "Eye Care",
                protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            },
            {
                value: "Cold and Cough",
                key: "Cold and Cough",
                protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            },
            {
                value: "Sexual Wellness",
                key: "Sexual Wellness",
                protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            },
            {
                value: "Feminine Care",
                key: "Feminine Care",
                protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            },
            {
                value: "Maternity Care",
                key: "Maternity Care",
                protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            },
            {
                value: "Nursing and Feeding",
                key: "Nursing and Feeding",
                protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            },
            {
                value: "Hand Wash",
                key: "Hand Wash",
                protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            },
            {
                value: "Sanitizers",
                key: "Sanitizers",
                protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            },
            {
                value: "Baby Care - Wipes and Buds",
                key: "Baby Care - Wipes and Buds",
                protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            },
            {
                value: "Baby Care - Rash Creams",
                key: "Baby Care - Rash Creams",
                protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            },
            {
                value: "Baby Care - Diapers and Accessories",
                key: "Baby Care - Diapers and Accessories",
                protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            },
            {
                value: "Health and Safety",
                key: "Health and Safety",
                protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            },
            {
                value: "Oral Care",
                key: "Oral Care",
                protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            },
            {
                value: "Contraceptives",
                key: "Contraceptives",
                protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            },
            {
                value: "Breathe Easy",
                key: "Breathe Easy",
                protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            },
            {
                value: "Health Foods and Drinks",
                key: "Health Foods and Drinks",
                protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            },
            {
                value: "Wound Care and Dressings",
                key: "Wound Care and Dressings",
                protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            },
            {
                value: "Surgicals",
                key: "Surgicals",
                protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            },
            {
                value: "Mental Wellness",
                key: "Mental Wellness",
                protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            },
            {
                value: "Gift Voucher",
                key: "Gift Voucher",
                protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            },]
    },
    {
        'category': 'Beauty and Personal Care',
        'subCategories': [
            {
                value: "Fragrance",
                key: "Fragrance",
                protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            },
            {
                value: "Bath Soaps and Gels",
                key: "Bath Soaps and Gels",
                protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            },
            {
                value: "Hair Oils, Care, and Styling",
                key: "Hair Oils, Care, and Styling",
                protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            },
            {
                value: "Shampoos and Conditioners",
                key: "Shampoos and Conditioners",
                protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            },
            {
                value: "Shaving and Grooming",
                key: "Shaving and Grooming",
                protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            },
            {
                value: "Beard Care and Tools",
                key: "Beard Care and Tools",
                protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            },
            {
                value: "Grooming Tools and Accessories",
                key: "Grooming Tools and Accessories",
                protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            },
            {
                value: "Makeup - Nail Care",
                key: "Makeup - Nail Care",
                protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            },
            {
                value: "Makeup - Eyes",
                key: "Makeup - Eyes",
                protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            },
            {
                value: "Makeup - Face",
                key: "Makeup - Face",
                protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            },
            {
                value: "Makeup - Lips",
                key: "Makeup - Lips",
                protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            },
            {
                value: "Makeup - Body",
                key: "Makeup - Body",
                protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            },
            {
                value: "Makeup - Remover",
                key: "Makeup - Remover",
                protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            },
            {
                value: "Makeup - Sets and Kits",
                key: "Makeup - Sets and Kits",
                protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            },
            {
                value: "Makeup - Tools and Brushes",
                key: "Makeup - Tools and Brushes",
                protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            },
            {
                value: "Makeup - Kits and Combos",
                key: "Makeup - Kits and Combos",
                protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            },
            {
                value: "Skin Care - Face Cleansers",
                key: "Skin Care - Face Cleansers",
                protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            },
            {
                value: "Skin Care - Hand and Feet",
                key: "Skin Care - Hand and Feet",
                protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            },
            {
                value: "Body Care - Cleansers",
                key: "Body Care - Cleansers",
                protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            },
            {
                value: "Body Care - Moisturizers",
                key: "Body Care - Moisturizers",
                protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            },
            {
                value: "Body Care - Loofah and Other Tools",
                key: "Body Care - Loofah and Other Tools",
                protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            },
            {
                value: "Body Care - Bath Salt and Additives",
                key: "Body Care - Bath Salt and Additives",
                protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            },
            {
                value: "Hair Care - Shampoo, Oils, Conditioners",
                key: "Hair Care - Shampoo, Oils, Conditioners",
                protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            },
            {
                value: "Skin Care - Lotions, Moisturisers, and Creams",
                key: "Skin Care - Lotions, Moisturisers, and Creams",
                protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            },
            {
                value: "Skin Care - Oils and Serums",
                key: "Skin Care - Oils and Serums",
                protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            },
            {
                value: "Gift Voucher",
                key: "Gift Voucher",
                protocolKey: "@ondc/org/statutory_reqs_packaged_commodities",
            },
        ]
    },
    {
        'category': 'Food and Beverages',
        'subCategories': [
            {
                value: "Baklava",
                key: "Baklava",
                protocolKey: "@ondc/org/mandatory_reqs_veggies_fruits",
            },
            {
                value: "Bao",
                key: "Bao",
                protocolKey: "@ondc/org/mandatory_reqs_veggies_fruits",
            },
            {
                value: "Barbecue",
                key: "Barbecue",
                protocolKey: "@ondc/org/mandatory_reqs_veggies_fruits",
            },
            {
                value: "Biryani",
                key: "Biryani",
                protocolKey: "@ondc/org/mandatory_reqs_veggies_fruits",
            },
            {
                value: "Bread",
                key: "Bread",
                protocolKey: "@ondc/org/mandatory_reqs_veggies_fruits",
            },
            {
                value: "Burger",
                key: "Burger",
                protocolKey: "@ondc/org/mandatory_reqs_veggies_fruits",
            },
            {
                value: "Cakes",
                key: "Cakes",
                protocolKey: "@ondc/org/mandatory_reqs_veggies_fruits",
            },
            {
                value: "Chaat",
                key: "Chaat",
                protocolKey: "@ondc/org/mandatory_reqs_veggies_fruits",
            },
            {
                value: "Cheesecakes",
                key: "Cheesecakes",
                protocolKey: "@ondc/org/mandatory_reqs_veggies_fruits",
            },
            {
                value: "Chicken",
                key: "Chicken",
                protocolKey: "@ondc/org/mandatory_reqs_veggies_fruits",
            },
            {
                value: "Chicken wings",
                key: "Chicken wings",
                protocolKey: "@ondc/org/mandatory_reqs_veggies_fruits",
            },
            {
                value: "Chips",
                key: "Chips",
                protocolKey: "@ondc/org/mandatory_reqs_veggies_fruits",
            },
            {
                value: "Coffee",
                key: "Coffee",
                protocolKey: "@ondc/org/mandatory_reqs_veggies_fruits",
            },
            {
                value: "Cookies",
                key: "Cookies",
                protocolKey: "@ondc/org/mandatory_reqs_veggies_fruits",
            },
            {
                value: "Crepes",
                key: "Crepes",
                protocolKey: "@ondc/org/mandatory_reqs_veggies_fruits",
            },
            {
                value: "Dal",
                key: "Dal",
                protocolKey: "@ondc/org/mandatory_reqs_veggies_fruits",
            },
            {
                value: "Desserts",
                key: "Desserts",
                protocolKey: "@ondc/org/mandatory_reqs_veggies_fruits",
            },
            {
                value: "Dhokla",
                key: "Dhokla",
                protocolKey: "@ondc/org/mandatory_reqs_veggies_fruits",
            },
            {
                value: "Dosa",
                key: "Dosa",
                protocolKey: "@ondc/org/mandatory_reqs_veggies_fruits",
            },
            {
                value: "Doughnuts",
                key: "Doughnuts",
                protocolKey: "@ondc/org/mandatory_reqs_veggies_fruits",
            },
            {
                value: "Eggs",
                key: "Eggs",
                protocolKey: "@ondc/org/mandatory_reqs_veggies_fruits",
            },
            {
                value: "Energy Drinks",
                key: "Energy Drinks",
                protocolKey: "@ondc/org/mandatory_reqs_veggies_fruits",
            },
            {
                value: "Falafel",
                key: "Falafel",
                protocolKey: "@ondc/org/mandatory_reqs_veggies_fruits",
            },
            {
                value: "Fresh Juice",
                key: "Fresh Juice",
                protocolKey: "@ondc/org/mandatory_reqs_veggies_fruits",
            },
            {
                value: "Fries",
                key: "Fries",
                protocolKey: "@ondc/org/mandatory_reqs_veggies_fruits",
            },
            {
                value: "Ice cream",
                key: "Ice cream",
                protocolKey: "@ondc/org/mandatory_reqs_veggies_fruits",
            },
            {
                value: "Idli",
                key: "Idli",
                protocolKey: "@ondc/org/mandatory_reqs_veggies_fruits",
            },
            {
                value: "Kabab",
                key: "Kabab",
                protocolKey: "@ondc/org/mandatory_reqs_veggies_fruits",
            },
            {
                value: "Kachori",
                key: "Kachori",
                protocolKey: "@ondc/org/mandatory_reqs_veggies_fruits",
            },
            {
                value: "Kulfi",
                key: "Kulfi",
                protocolKey: "@ondc/org/mandatory_reqs_veggies_fruits",
            },
            {
                value: "Lassi",
                key: "Lassi",
                protocolKey: "@ondc/org/mandatory_reqs_veggies_fruits",
            },
            {
                value: "Meal bowl",
                key: "Meal bowl",
                protocolKey: "@ondc/org/mandatory_reqs_veggies_fruits",
            },
            {
                value: "Mezze",
                key: "Mezze",
                protocolKey: "@ondc/org/mandatory_reqs_veggies_fruits",
            },
            {
                value: "Mithai",
                key: "Mithai",
                protocolKey: "@ondc/org/mandatory_reqs_veggies_fruits",
            },
            {
                value: "Momos",
                key: "Momos",
                protocolKey: "@ondc/org/mandatory_reqs_veggies_fruits",
            },
            {
                value: "Mutton",
                key: "Mutton",
                protocolKey: "@ondc/org/mandatory_reqs_veggies_fruits",
            },
            {
                value: "Nachos",
                key: "Nachos",
                protocolKey: "@ondc/org/mandatory_reqs_veggies_fruits",
            },
            {
                value: "Noodles",
                key: "Noodles",
                protocolKey: "@ondc/org/mandatory_reqs_veggies_fruits",
            },
            {
                value: "Pakodas",
                key: "Pakodas",
                protocolKey: "@ondc/org/mandatory_reqs_veggies_fruits",
            },
            {
                value: "Pancakes",
                key: "Pancakes",
                protocolKey: "@ondc/org/mandatory_reqs_veggies_fruits",
            },
            {
                value: "Paneer",
                key: "Paneer",
                protocolKey: "@ondc/org/mandatory_reqs_veggies_fruits",
            },
            {
                value: "Pasta",
                key: "Pasta",
                protocolKey: "@ondc/org/mandatory_reqs_veggies_fruits",
            },
            {
                value: "Pastries",
                key: "Pastries",
                protocolKey: "@ondc/org/mandatory_reqs_veggies_fruits",
            },
            {
                value: "Pie",
                key: "Pie",
                protocolKey: "@ondc/org/mandatory_reqs_veggies_fruits",
            },
            {
                value: "Pizza",
                key: "Pizza",
                protocolKey: "@ondc/org/mandatory_reqs_veggies_fruits",
            },
            {
                value: "Poha",
                key: "Poha",
                protocolKey: "@ondc/org/mandatory_reqs_veggies_fruits",
            },
            {
                value: "Raita",
                key: "Raita",
                protocolKey: "@ondc/org/mandatory_reqs_veggies_fruits",
            },
            {
                value: "Rice",
                key: "Rice",
                protocolKey: "@ondc/org/mandatory_reqs_veggies_fruits",
            },
            {
                value: "Rolls",
                key: "Rolls",
                protocolKey: "@ondc/org/mandatory_reqs_veggies_fruits",
            },
            {
                value: "Roti",
                key: "Roti",
                protocolKey: "@ondc/org/mandatory_reqs_veggies_fruits",
            },
            {
                value: "Salad",
                key: "Salad",
                protocolKey: "@ondc/org/mandatory_reqs_veggies_fruits",
            },
            {
                value: "Samosa",
                key: "Samosa",
                protocolKey: "@ondc/org/mandatory_reqs_veggies_fruits",
            },
            {
                value: "Sandwich",
                key: "Sandwich",
                protocolKey: "@ondc/org/mandatory_reqs_veggies_fruits",
            },
            {
                value: "Seafood",
                key: "Seafood",
                protocolKey: "@ondc/org/mandatory_reqs_veggies_fruits",
            },
            {
                value: "Shakes & Smoothies",
                key: "Shakes & Smoothies",
                protocolKey: "@ondc/org/mandatory_reqs_veggies_fruits",
            },
            {
                value: "Soft Drink",
                key: "Soft Drink",
                protocolKey: "@ondc/org/mandatory_reqs_veggies_fruits",
            },
            {
                value: "Soup",
                key: "Soup",
                protocolKey: "@ondc/org/mandatory_reqs_veggies_fruits",
            },
            {
                value: "Spring Roll",
                key: "Spring Roll",
                protocolKey: "@ondc/org/mandatory_reqs_veggies_fruits",
            },
            {
                value: "Sushi",
                key: "Sushi",
                protocolKey: "@ondc/org/mandatory_reqs_veggies_fruits",
            },
            {
                value: "Tacos",
                key: "Tacos",
                protocolKey: "@ondc/org/mandatory_reqs_veggies_fruits",
            },
            {
                value: "Tandoori",
                key: "Tandoori",
                protocolKey: "@ondc/org/mandatory_reqs_veggies_fruits",
            },
            {
                value: "Tart",
                key: "Tart",
                protocolKey: "@ondc/org/mandatory_reqs_veggies_fruits",
            },
            {
                value: "Tea",
                key: "Tea",
                protocolKey: "@ondc/org/mandatory_reqs_veggies_fruits",
            },
            {
                value: "Thali",
                key: "Thali",
                protocolKey: "@ondc/org/mandatory_reqs_veggies_fruits",
            },
            {
                value: "Tikka",
                key: "Tikka",
                protocolKey: "@ondc/org/mandatory_reqs_veggies_fruits",
            },
            {
                value: "Upma",
                key: "Upma",
                protocolKey: "@ondc/org/mandatory_reqs_veggies_fruits",
            },
            {
                value: "Uttapam",
                key: "Uttapam",
                protocolKey: "@ondc/org/mandatory_reqs_veggies_fruits",
            },
            {
                value: "Vada",
                key: "Vada",
                protocolKey: "@ondc/org/mandatory_reqs_veggies_fruits",
            },
            {
                value: "Vegetables",
                key: "Vegetables",
                protocolKey: "@ondc/org/mandatory_reqs_veggies_fruits",
            },
            {
                value: "Waffle",
                key: "Waffle",
                protocolKey: "@ondc/org/mandatory_reqs_veggies_fruits",
            },
            {
                value: "Wrap",
                key: "Wrap",
                protocolKey: "@ondc/org/mandatory_reqs_veggies_fruits",
            },
            {
                value: "Yogurt",
                key: "Yogurt",
                protocolKey: "@ondc/org/mandatory_reqs_veggies_fruits",
            },
        ]
    }
];


const Attributes = [
    {
        'category': 'Electronics',
        'subCategory': 'Mobile Phone',
        'attributes': [
            {
                "name": "Brand",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Model",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Model Year",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Colour",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Colour Name",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "RAM",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "RAM unit",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "ROM",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "ROM unit",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Storage",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Storage unit",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Screen Size",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Primary Camera",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Secondary Camera",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "CPU",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "GPU",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Battery Capacity",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "OS Type",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "OS Version",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Connectivity",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Form factor",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Weight",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Length",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Breadth",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Height",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Refurbished",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            }
        ]
    },
    {
        'category': 'Electronics',
        'subCategory': 'Smart Watch',
        'attributes': [
            {
                "name": "Brand",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Model",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Model Year",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Colour",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Colour Name",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Screen Size",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Weight",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Length",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Breadth",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Height",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Refurbished",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            }
        ]
    },
    {
        'category': 'Electronics',
        'subCategory': 'Headset',
        'attributes': [
            {
                "name": "Brand",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Model",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Model Year",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Connectivity",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Form factor",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Weight",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Length",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Breadth",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Height",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Refurbished",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            }
        ]
    },
    {
        'category': 'Electronics',
        'subCategory': 'Laptop',
        'attributes': [
            {
                "name": "Brand",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Model Year",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Colour",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Colour Name",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "RAM",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "RAM unit",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "ROM",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "ROM unit",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Storage",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Storage unit",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Storage Type",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Screen Size",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "CPU",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "GPU",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Battery Capacity",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "OS Type",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "OS Version",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Includes",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Weight",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Length",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Breadth",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Height",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Refurbished",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            }
        ]
    },
    {
        'category': 'Electronics',
        'subCategory': 'Desktop',
        'attributes': [
            {
                "name": "Brand",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Model",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Model Year",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "RAM",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "RAM unit",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "ROM",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "ROM unit",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Storage",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Storage unit",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Storage Type",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Screen Size",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "CPU",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "GPU",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Battery Capacity",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "OS Type",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "OS Version",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Form factor",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Includes",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Weight",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Length",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Breadth",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Height",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Refurbished",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            }
        ]
    },
    {
        'category': 'Electronics',
        'subCategory': 'Tablet',
        'attributes': [
            {
                "name": "Brand",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Model",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Model Year",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "RAM",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "RAM unit",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "ROM",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "ROM unit",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Storage",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Storage unit",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Storage Type",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Screen Size",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "CPU",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "GPU",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Battery Capacity",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "OS Type",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "OS Version",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Includes",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Weight",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Length",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Breadth",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Height",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Refurbished",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            }
        ]
    },
    {
        'category': 'Electronics',
        'subCategory': 'Keyboard',
        'attributes': [
            {
                "name": "Brand",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Colour",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Colour Name",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Connectivity",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Compatible Devices",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Includes",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Weight",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Length",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Breadth",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Height",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Refurbished",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            }
        ]
    },
    {
        'category': 'Electronics',
        'subCategory': 'Monitor',
        'attributes': [
            {
                "name": "Brand",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Screen Size",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Special Feature",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Weight",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Length",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Breadth",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Height",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Refurbished",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            }
        ]
    },
    {
        'category': 'Electronics',
        'subCategory': 'Mouse',
        'attributes': [
            {
                "name": "Brand",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Colour",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Colour Name",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Connectivity",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Special Feature",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Weight",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Length",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Breadth",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Height",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Refurbished",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            }
        ]
    },
    {
        'category': 'Electronics',
        'subCategory': 'Power Bank',
        'attributes': [
            {
                "name": "Brand",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Model",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Model Year",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Weight",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Length",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Breadth",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Height",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Refurbished",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            }
        ]
    },
    {
        'category': 'Grocery',
        'subCategory': 'Fruits and Vegetables',
        'attributes': []
    },
    {
        'category': 'Grocery',
        'subCategory': 'Masala & Seasoning',
        'attributes': []
    },
    {
        'category': 'Grocery',
        'subCategory': 'Oil & Ghee',
        'attributes': []
    },
    {
        'category': 'Grocery',
        'subCategory': 'Eggs, Meat & Fish',
        'attributes': []
    },
    {
        'category': 'Grocery',
        'subCategory': 'Cleaning & Household',
        'attributes': []
    },
    {
        'category': 'Grocery',
        'subCategory': 'Bakery, Cakes & Dairy',
        'attributes': []
    },
    {
        'category': 'Grocery',
        'subCategory': 'Pet Care',
        'attributes': []
    },
    {
        'category': 'Grocery',
        'subCategory': 'Stationery',
        'attributes': []
    },
    {
        'category': 'Grocery',
        'subCategory': 'Dairy and Cheese',
        'attributes': []
    },
    {
        'category': 'Grocery',
        'subCategory': 'Snacks, Dry Fruits, Nuts',
        'attributes': []
    },
    {
        'category': 'Grocery',
        'subCategory': 'Pasta, Soup and Noodles',
        'attributes': []
    },
    {
        'category': 'Grocery',
        'subCategory': 'Cereals and Breakfast',
        'attributes': []
    },
    {
        'category': 'Grocery',
        'subCategory': 'Sauces, Spreads and Dips',
        'attributes': []
    },
    {
        'category': 'Grocery',
        'subCategory': 'Chocolates and Biscuits',
        'attributes': []
    },
    {
        'category': 'Grocery',
        'subCategory': 'Cooking and Baking Needs',
        'attributes': []
    },
    {
        'category': 'Grocery',
        'subCategory': 'Tinned and Processed Food',
        'attributes': []
    },
    {
        'category': 'Grocery',
        'subCategory': 'Atta, Flours and Sooji',
        'attributes': []
    },
    {
        'category': 'Grocery',
        'subCategory': 'Rice and Rice Products',
        'attributes': []
    },
    {
        'category': 'Grocery',
        'subCategory': 'Dals and Pulses',
        'attributes': []
    },
    {
        'category': 'Grocery',
        'subCategory': 'Salt, Sugar and Jaggery',
        'attributes': []
    },
    {
        'category': 'Grocery',
        'subCategory': 'Energy and Soft Drinks',
        'attributes': []
    },
    {
        'category': 'Grocery',
        'subCategory': 'Water',
        'attributes': []
    },
    {
        'category': 'Grocery',
        'subCategory': 'Tea and Coffee',
        'attributes': []
    },
    {
        'category': 'Grocery',
        'subCategory': 'Fruit Juices and Fruit Drinks',
        'attributes': []
    },
    {
        'category': 'Grocery',
        'subCategory': 'Snacks and Namkeen',
        'attributes': []
    },
    {
        'category': 'Grocery',
        'subCategory': 'Ready to Cook and Eat',
        'attributes': []
    },
    {
        'category': 'Grocery',
        'subCategory': 'Pickles and Chutney',
        'attributes': []
    },
    {
        'category': 'Grocery',
        'subCategory': 'Indian Sweets',
        'attributes': []
    },
    {
        'category': 'Grocery',
        'subCategory': 'Frozen Vegetables',
        'attributes': []
    },
    {
        'category': 'Grocery',
        'subCategory': 'Frozen Snacks',
        'attributes': []
    },
    {
        'category': 'Grocery',
        'subCategory': 'Gift Voucher',
        'attributes': []
    },
    {
        'category': 'Home and Kitchen',
        'subCategory': 'Home Decor',
        'attributes': [
            {
                "name": "Brand",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Colour",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": "propertyEnums/colour**"
            },
            {
                "name": "Colour Name",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Material",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": "propertyEnums/material**"
            },
            {
                "name": "Size",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Weight",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Breadth",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Height",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Model",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Assembly Required",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Care Instructions",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Special Features",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            }
        ]
    },
    {
        'category': 'Home and Kitchen',
        'subCategory': 'Furniture',
        'attributes': [
            {
                "name": "Brand",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Colour",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": "propertyEnums/colour**"
            },
            {
                "name": "Colour Name",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Material",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": "propertyEnums/material**"
            },
            {
                "name": "Size",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Weight",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Breadth",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Height",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Model",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Assembly Required",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Care Instructions",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Special Features",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            }
        ]
    },
    {
        'category': 'Home and Kitchen',
        'subCategory': 'Home Furnishing - Bedding and Linen',
        'attributes': [
            {
                "name": "Brand",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Colour",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": "propertyEnums/colour**"
            },
            {
                "name": "Colour Name",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Material",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": "propertyEnums/material**"
            },
            {
                "name": "Size",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Weight",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Breadth",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Height",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Model",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Assembly Required",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Care Instructions",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Special Features",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            }
        ]
    },
    {
        'category': 'Home and Kitchen',
        'subCategory': 'Cleaning Supplies',
        'attributes': [
            {
                "name": "Brand",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Colour",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": "propertyEnums/colour**"
            },
            {
                "name": "Colour Name",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Material",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": "propertyEnums/material**"
            },
            {
                "name": "Size",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Weight",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Breadth",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Height",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Model",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Assembly Required",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Care Instructions",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Special Features",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            }
        ]
    },
    {
        'category': 'Home and Kitchen',
        'subCategory': 'Electricals',
        'attributes': [
            {
                "name": "Brand",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Colour",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": "propertyEnums/colour**"
            },
            {
                "name": "Colour Name",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Material",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": "propertyEnums/material**"
            },
            {
                "name": "Size",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Weight",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Breadth",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Height",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Model",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Assembly Required",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Care Instructions",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Special Features",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            }
        ]
    },
    {
        'category': 'Home and Kitchen',
        'subCategory': 'Bathroom and Kitchen fixtures',
        'attributes': [
            {
                "name": "Brand",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Colour",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": "propertyEnums/colour**"
            },
            {
                "name": "Colour Name",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Material",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": "propertyEnums/material**"
            },
            {
                "name": "Size",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Weight",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Breadth",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Height",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Model",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Assembly Required",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Care Instructions",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Special Features",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            }
        ]
    },
    {
        'category': 'Home and Kitchen',
        'subCategory': 'Garden & Outdoor',
        'attributes': [
            {
                "name": "Brand",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Colour",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": "propertyEnums/colour**"
            },
            {
                "name": "Colour Name",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Material",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": "propertyEnums/material**"
            },
            {
                "name": "Size",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Weight",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Breadth",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Height",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Model",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Assembly Required",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Care Instructions",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Special Features",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            }
        ]
    },
    {
        'category': 'Home and Kitchen',
        'subCategory': 'Sports and Fitness Equipment',
        'attributes': [
            {
                "name": "Brand",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Colour",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": "propertyEnums/colour**"
            },
            {
                "name": "Colour Name",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Material",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": "propertyEnums/material**"
            },
            {
                "name": "Size",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Weight",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Breadth",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Height",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Model",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Assembly Required",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Care Instructions",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Special Features",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            }
        ]
    },
    {
        'category': 'Home and Kitchen',
        'subCategory': 'Cookware',
        'attributes': [
            {
                "name": "Brand",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Colour",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": "propertyEnums/colour**"
            },
            {
                "name": "Colour Name",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Material",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": "propertyEnums/material**"
            },
            {
                "name": "Size",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Weight",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Breadth",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Height",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Model",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Assembly Required",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Care Instructions",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Special Features",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            }
        ]
    },
    {
        'category': 'Home and Kitchen',
        'subCategory': 'Serveware',
        'attributes': [
            {
                "name": "Brand",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Colour",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": "propertyEnums/colour**"
            },
            {
                "name": "Colour Name",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Material",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": "propertyEnums/material**"
            },
            {
                "name": "Size",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Weight",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Breadth",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Height",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Model",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Assembly Required",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Care Instructions",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Special Features",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            }
        ]
    },
    {
        'category': 'Home and Kitchen',
        'subCategory': 'Kitchen Storage and Containers',
        'attributes': [
            {
                "name": "Brand",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Colour",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": "propertyEnums/colour**"
            },
            {
                "name": "Colour Name",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Material",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": "propertyEnums/material**"
            },
            {
                "name": "Size",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Weight",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Breadth",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Height",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Model",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Assembly Required",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Care Instructions",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Special Features",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            }
        ]
    },
    {
        'category': 'Home and Kitchen',
        'subCategory': 'Kitchen Tools',
        'attributes': [
            {
                "name": "Brand",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Colour",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": "propertyEnums/colour**"
            },
            {
                "name": "Colour Name",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Material",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": "propertyEnums/material**"
            },
            {
                "name": "Size",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Weight",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Breadth",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Height",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Model",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Assembly Required",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Care Instructions",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Special Features",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            }
        ]
    },
    {
        'category': 'Home and Kitchen',
        'subCategory': 'Closet/Laundry/Shoe Organization',
        'attributes': [
            {
                "name": "Brand",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Colour",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": "propertyEnums/colour**"
            },
            {
                "name": "Colour Name",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Material",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": "propertyEnums/material**"
            },
            {
                "name": "Size",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Weight",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Breadth",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Height",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Model",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Assembly Required",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Care Instructions",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Special Features",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            }
        ]
    },
    {
        'category': 'Home and Kitchen',
        'subCategory': 'Toys and Games',
        'attributes': [
            {
                "name": "Brand",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Colour",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": "propertyEnums/colour**"
            },
            {
                "name": "Colour Name",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Material",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": "propertyEnums/material**"
            },
            {
                "name": "Size",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Weight",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Breadth",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Height",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Model",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Assembly Required",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Care Instructions",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Special Features",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            }
        ]
    },
    {
        'category': 'Home and Kitchen',
        'subCategory': 'Stationery',
        'attributes': [
            {
                "name": "Brand",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Colour",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": "propertyEnums/colour**"
            },
            {
                "name": "Colour Name",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Material",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": "propertyEnums/material**"
            },
            {
                "name": "Size",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Weight",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Breadth",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Height",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Model",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Assembly Required",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Care Instructions",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Special Features",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            }
        ]
    },
    {
        'category': 'Home and Kitchen',
        'subCategory': 'Gift Voucher',
        'attributes': []
    },
    {
        'category': 'Health and Wellness',
        'subCategory': 'Pain Relief',
        'attributes': [
            {
                "name": "Brand",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": "propertyEnums/brand**"
            },
            {
                "name": "Prescription Required",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": "propertyEnums/prescription_required**"
            },
            {
                "name": "Usage Instruction",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            }
        ]
    },
    {
        'category': 'Health and Wellness',
        'subCategory': 'Nutrition and Fitness Supplements',
        'attributes': [
            {
                "name": "Brand",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": "propertyEnums/brand**"
            },
            {
                "name": "Prescription Required",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": "propertyEnums/prescription_required**"
            },
            {
                "name": "Usage Instruction",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            }
        ]
    },
    {
        'category': 'Health and Wellness',
        'subCategory': 'Speciality Care',
        'attributes': [
            {
                "name": "Brand",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": "propertyEnums/brand**"
            },
            {
                "name": "Prescription Required",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": "propertyEnums/prescription_required**"
            },
            {
                "name": "Usage Instruction",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            }
        ]
    },
    {
        'category': 'Health and Wellness',
        'subCategory': 'Covid Essentials',
        'attributes': [
            {
                "name": "Brand",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": "propertyEnums/brand**"
            },
            {
                "name": "Prescription Required",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": "propertyEnums/prescription_required**"
            },
            {
                "name": "Usage Instruction",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            }
        ]
    },
    {
        'category': 'Health and Wellness',
        'subCategory': 'Diabetes Control',
        'attributes': [
            {
                "name": "Brand",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": "propertyEnums/brand**"
            },
            {
                "name": "Prescription Required",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": "propertyEnums/prescription_required**"
            },
            {
                "name": "Usage Instruction",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            }
        ]
    },
    {
        'category': 'Health and Wellness',
        'subCategory': 'Healthcare & Fitness Devices',
        'attributes': [
            {
                "name": "Brand",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": "propertyEnums/brand**"
            },
            {
                "name": "Prescription Required",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": "propertyEnums/prescription_required**"
            },
            {
                "name": "Usage Instruction",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            }
        ]
    },
    {
        'category': 'Health and Wellness',
        'subCategory': 'Ayurvedic',
        'attributes': [
            {
                "name": "Brand",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": "propertyEnums/brand**"
            },
            {
                "name": "Prescription Required",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": "propertyEnums/prescription_required**"
            },
            {
                "name": "Usage Instruction",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            }
        ]
    },
    {
        'category': 'Health and Wellness',
        'subCategory': 'Homeopathy',
        'attributes': [
            {
                "name": "Brand",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": "propertyEnums/brand**"
            },
            {
                "name": "Prescription Required",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": "propertyEnums/prescription_required**"
            },
            {
                "name": "Usage Instruction",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            }
        ]
    },
    {
        'category': 'Health and Wellness',
        'subCategory': 'Unani and Siddha',
        'attributes': [
            {
                "name": "Brand",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": "propertyEnums/brand**"
            },
            {
                "name": "Prescription Required",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": "propertyEnums/prescription_required**"
            },
            {
                "name": "Usage Instruction",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            }
        ]
    },
    {
        'category': 'Health and Wellness',
        'subCategory': 'Elder Care',
        'attributes': [
            {
                "name": "Brand",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": "propertyEnums/brand**"
            },
            {
                "name": "Prescription Required",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": "propertyEnums/prescription_required**"
            },
            {
                "name": "Usage Instruction",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            }
        ]
    },
    {
        'category': 'Health and Wellness',
        'subCategory': 'Baby Care',
        'attributes': [
            {
                "name": "Brand",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": "propertyEnums/brand**"
            },
            {
                "name": "Prescription Required",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": "propertyEnums/prescription_required**"
            },
            {
                "name": "Usage Instruction",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            }
        ]
    },
    {
        'category': 'Health and Wellness',
        'subCategory': 'Orthopaedic Care',
        'attributes': [
            {
                "name": "Brand",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": "propertyEnums/brand**"
            },
            {
                "name": "Prescription Required",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": "propertyEnums/prescription_required**"
            },
            {
                "name": "Usage Instruction",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            }
        ]
    },
    {
        'category': 'Health and Wellness',
        'subCategory': 'Mobility Aids',
        'attributes': [
            {
                "name": "Brand",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": "propertyEnums/brand**"
            },
            {
                "name": "Prescription Required",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": "propertyEnums/prescription_required**"
            },
            {
                "name": "Usage Instruction",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            }
        ]
    },
    {
        'category': 'Health and Wellness',
        'subCategory': 'Medicated Hair Care',
        'attributes': [
            {
                "name": "Brand",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": "propertyEnums/brand**"
            },
            {
                "name": "Prescription Required",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": "propertyEnums/prescription_required**"
            },
            {
                "name": "Usage Instruction",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            }
        ]
    },
    {
        'category': 'Health and Wellness',
        'subCategory': 'Medicated Skin Care',
        'attributes': [
            {
                "name": "Brand",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": "propertyEnums/brand**"
            },
            {
                "name": "Prescription Required",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": "propertyEnums/prescription_required**"
            },
            {
                "name": "Usage Instruction",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            }
        ]
    },
    {
        'category': 'Health and Wellness',
        'subCategory': 'Speciality Face Cleansers',
        'attributes': [
            {
                "name": "Brand",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": "propertyEnums/brand**"
            },
            {
                "name": "Prescription Required",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": "propertyEnums/prescription_required**"
            },
            {
                "name": "Usage Instruction",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            }
        ]
    },
    {
        'category': 'Health and Wellness',
        'subCategory': 'Gastric Care',
        'attributes': [
            {
                "name": "Brand",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": "propertyEnums/brand**"
            },
            {
                "name": "Prescription Required",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": "propertyEnums/prescription_required**"
            },
            {
                "name": "Usage Instruction",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            }
        ]
    },
    {
        'category': 'Health and Wellness',
        'subCategory': 'ENT Care',
        'attributes': [
            {
                "name": "Brand",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": "propertyEnums/brand**"
            },
            {
                "name": "Prescription Required",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": "propertyEnums/prescription_required**"
            },
            {
                "name": "Usage Instruction",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            }
        ]
    },
    {
        'category': 'Health and Wellness',
        'subCategory': 'Eye Care',
        'attributes': [
            {
                "name": "Brand",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": "propertyEnums/brand**"
            },
            {
                "name": "Prescription Required",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": "propertyEnums/prescription_required**"
            },
            {
                "name": "Usage Instruction",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            }
        ]
    },
    {
        'category': 'Health and Wellness',
        'subCategory': 'Cold and Cough',
        'attributes': [
            {
                "name": "Brand",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": "propertyEnums/brand**"
            },
            {
                "name": "Prescription Required",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": "propertyEnums/prescription_required**"
            },
            {
                "name": "Usage Instruction",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            }
        ]
    },
    {
        'category': 'Health and Wellness',
        'subCategory': 'Sexual Wellness',
        'attributes': [
            {
                "name": "Brand",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": "propertyEnums/brand**"
            },
            {
                "name": "Prescription Required",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": "propertyEnums/prescription_required**"
            },
            {
                "name": "Usage Instruction",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            }
        ]
    },
    {
        'category': 'Health and Wellness',
        'subCategory': 'Feminine Care',
        'attributes': [
            {
                "name": "Brand",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": "propertyEnums/brand**"
            },
            {
                "name": "Prescription Required",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": "propertyEnums/prescription_required**"
            },
            {
                "name": "Usage Instruction",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            }
        ]
    },
    {
        'category': 'Health and Wellness',
        'subCategory': 'Maternity Care',
        'attributes': [
            {
                "name": "Brand",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": "propertyEnums/brand**"
            },
            {
                "name": "Prescription Required",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": "propertyEnums/prescription_required**"
            },
            {
                "name": "Usage Instruction",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            }
        ]
    },
    {
        'category': 'Health and Wellness',
        'subCategory': 'Nursing and Feeding',
        'attributes': [
            {
                "name": "Brand",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": "propertyEnums/brand**"
            },
            {
                "name": "Prescription Required",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": "propertyEnums/prescription_required**"
            },
            {
                "name": "Usage Instruction",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            }
        ]
    },
    {
        'category': 'Health and Wellness',
        'subCategory': 'Hand Wash',
        'attributes': [
            {
                "name": "Brand",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": "propertyEnums/brand**"
            },
            {
                "name": "Prescription Required",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": "propertyEnums/prescription_required**"
            },
            {
                "name": "Usage Instruction",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            }
        ]
    },
    {
        'category': 'Health and Wellness',
        'subCategory': 'Sanitizers',
        'attributes': [
            {
                "name": "Brand",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": "propertyEnums/brand**"
            },
            {
                "name": "Prescription Required",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": "propertyEnums/prescription_required**"
            },
            {
                "name": "Usage Instruction",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            }
        ]
    },
    {
        'category': 'Health and Wellness',
        'subCategory': 'Baby Care - Wipes and Buds',
        'attributes': [
            {
                "name": "Brand",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": "propertyEnums/brand**"
            },
            {
                "name": "Prescription Required",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": "propertyEnums/prescription_required**"
            },
            {
                "name": "Usage Instruction",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            }
        ]
    },
    {
        'category': 'Health and Wellness',
        'subCategory': 'Baby Care - Rash Creams',
        'attributes': [
            {
                "name": "Brand",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": "propertyEnums/brand**"
            },
            {
                "name": "Prescription Required",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": "propertyEnums/prescription_required**"
            },
            {
                "name": "Usage Instruction",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            }
        ]
    },
    {
        'category': 'Health and Wellness',
        'subCategory': 'Baby Care - Diapers and Accessories',
        'attributes': [
            {
                "name": "Brand",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": "propertyEnums/brand**"
            },
            {
                "name": "Prescription Required",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": "propertyEnums/prescription_required**"
            },
            {
                "name": "Usage Instruction",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            }
        ]
    },
    {
        'category': 'Health and Wellness',
        'subCategory': 'Health and Safety',
        'attributes': [
            {
                "name": "Brand",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": "propertyEnums/brand**"
            },
            {
                "name": "Prescription Required",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": "propertyEnums/prescription_required**"
            },
            {
                "name": "Usage Instruction",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            }
        ]
    },
    {
        'category': 'Health and Wellness',
        'subCategory': 'Oral Care',
        'attributes': [
            {
                "name": "Brand",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": "propertyEnums/brand**"
            },
            {
                "name": "Prescription Required",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": "propertyEnums/prescription_required**"
            },
            {
                "name": "Usage Instruction",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            }
        ]
    },
    {
        'category': 'Health and Wellness',
        'subCategory': 'Contraceptives',
        'attributes': [
            {
                "name": "Brand",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": "propertyEnums/brand**"
            },
            {
                "name": "Prescription Required",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": "propertyEnums/prescription_required**"
            },
            {
                "name": "Usage Instruction",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            }
        ]
    },
    {
        'category': 'Health and Wellness',
        'subCategory': 'Breathe Easy',
        'attributes': [
            {
                "name": "Brand",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": "propertyEnums/brand**"
            },
            {
                "name": "Prescription Required",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": "propertyEnums/prescription_required**"
            },
            {
                "name": "Usage Instruction",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            }
        ]
    },
    {
        'category': 'Health and Wellness',
        'subCategory': 'Health Foods and Drinks',
        'attributes': [
            {
                "name": "Brand",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": "propertyEnums/brand**"
            },
            {
                "name": "Prescription Required",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": "propertyEnums/prescription_required**"
            },
            {
                "name": "Usage Instruction",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            }
        ]
    },
    {
        'category': 'Health and Wellness',
        'subCategory': 'Wound Care and Dressings',
        'attributes': [
            {
                "name": "Brand",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": "propertyEnums/brand**"
            },
            {
                "name": "Prescription Required",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": "propertyEnums/prescription_required**"
            },
            {
                "name": "Usage Instruction",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            }
        ]
    },
    {
        'category': 'Health and Wellness',
        'subCategory': 'Surgicals',
        'attributes': [
            {
                "name": "Brand",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": "propertyEnums/brand**"
            },
            {
                "name": "Prescription Required",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": "propertyEnums/prescription_required**"
            },
            {
                "name": "Usage Instruction",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            }
        ]
    },
    {
        'category': 'Health and Wellness',
        'subCategory': 'Mental Wellness',
        'attributes': [
            {
                "name": "Brand",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": "propertyEnums/brand**"
            },
            {
                "name": "Prescription Required",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": "propertyEnums/prescription_required**"
            },
            {
                "name": "Usage Instruction",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            }
        ]
    },
    {
        'category': 'Health and Wellness',
        'subCategory': 'Gift Voucher',
        'attributes': [
            {
                "name": "Brand",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": "propertyEnums/brand**"
            },
            {
                "name": "Prescription Required",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": "propertyEnums/prescription_required**"
            },
            {
                "name": "Usage Instruction",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            }
        ]
    },
    {
        'category': 'Beauty and Personal Care',
        'subCategory': 'Fragrance',
        'attributes': [
            {
                name: "Brand",
                required: true,
                example: "",
                variationAllowed: false,
                type: "input",
            },
            {
                name: "Colour",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
            },
            {
                name: "Colour Name",
                required: false,
                example: "",
                variationAllowed: false,
                type: "input",
            },
            {
                name: "Gender",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
            },
            {
                name: "Concern",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
            },
            {
                name: "Ingredient",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
            },
            {
                name: "Conscious",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
            },
            {
                name: "Preference",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
            },
            {
                name: "Formulation",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
            },
            {
                name: "Skin Type",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
            },
        ]
    },
    {
        'category': 'Beauty and Personal Care',
        'subCategory': 'Bath Soaps and Gels',
        'attributes': [
            {
                name: "Brand",
                required: true,
                example: "",
                variationAllowed: false,
                type: "input",
            },
            {
                name: "Colour",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
            },
            {
                name: "Colour Name",
                required: false,
                example: "",
                variationAllowed: false,
                type: "input",
            },
            {
                name: "Gender",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
            },
            {
                name: "Concern",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
            },
            {
                name: "Ingredient",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
            },
            {
                name: "Conscious",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
            },
            {
                name: "Preference",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
            },
            {
                name: "Formulation",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
            },
            {
                name: "Skin Type",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
            },
        ]
    },
    {
        'category': 'Beauty and Personal Care',
        'subCategory': 'Hair Oils, Care, and Styling',
        'attributes': [
            {
                name: "Brand",
                required: true,
                example: "",
                variationAllowed: false,
                type: "input",
            },
            {
                name: "Colour",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
            },
            {
                name: "Colour Name",
                required: false,
                example: "",
                variationAllowed: false,
                type: "input",
            },
            {
                name: "Gender",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
            },
            {
                name: "Concern",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
            },
            {
                name: "Ingredient",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
            },
            {
                name: "Conscious",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
            },
            {
                name: "Preference",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
            },
            {
                name: "Formulation",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
            },
            {
                name: "Skin Type",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
            },
        ]
    },
    {
        'category': 'Beauty and Personal Care',
        'subCategory': 'Shampoos and Conditioners',
        'attributes': [
            {
                name: "Brand",
                required: true,
                example: "",
                variationAllowed: false,
                type: "input",
            },
            {
                name: "Colour",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
            },
            {
                name: "Colour Name",
                required: false,
                example: "",
                variationAllowed: false,
                type: "input",
            },
            {
                name: "Gender",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
            },
            {
                name: "Concern",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
            },
            {
                name: "Ingredient",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
            },
            {
                name: "Conscious",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
            },
            {
                name: "Preference",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
            },
            {
                name: "Formulation",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
            },
            {
                name: "Skin Type",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
            },
        ]
    },
    {
        'category': 'Beauty and Personal Care',
        'subCategory': 'Shaving and Grooming',
        'attributes': [
            {
                name: "Brand",
                required: true,
                example: "",
                variationAllowed: false,
                type: "input",
            },
            {
                name: "Colour",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
            },
            {
                name: "Colour Name",
                required: false,
                example: "",
                variationAllowed: false,
                type: "input",
            },
            {
                name: "Gender",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
            },
            {
                name: "Concern",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
            },
            {
                name: "Ingredient",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
            },
            {
                name: "Conscious",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
            },
            {
                name: "Preference",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
            },
            {
                name: "Formulation",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
            },
            {
                name: "Skin Type",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
            },
        ]
    },
    {
        'category': 'Beauty and Personal Care',
        'subCategory': 'Beard Care and Tools',
        'attributes': [
            {
                name: "Brand",
                required: true,
                example: "",
                variationAllowed: false,
                type: "input",
            },
            {
                name: "Colour",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
            },
            {
                name: "Colour Name",
                required: false,
                example: "",
                variationAllowed: false,
                type: "input",
            },
            {
                name: "Gender",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
            },
            {
                name: "Concern",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
            },
            {
                name: "Ingredient",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
            },
            {
                name: "Conscious",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
            },
            {
                name: "Preference",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
            },
            {
                name: "Formulation",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
            },
            {
                name: "Skin Type",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
            },
        ]
    },
    {
        'category': 'Beauty and Personal Care',
        'subCategory': 'Grooming Tools and Accessories',
        'attributes': [
            {
                name: "Brand",
                required: true,
                example: "",
                variationAllowed: false,
                type: "input",
            },
            {
                name: "Colour",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
            },
            {
                name: "Colour Name",
                required: false,
                example: "",
                variationAllowed: false,
                type: "input",
            },
            {
                name: "Gender",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
            },
            {
                name: "Concern",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
            },
            {
                name: "Ingredient",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
            },
            {
                name: "Conscious",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
            },
            {
                name: "Preference",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
            },
            {
                name: "Formulation",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
            },
            {
                name: "Skin Type",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
            },
        ]
    },
    {
        'category': 'Beauty and Personal Care',
        'subCategory': 'Makeup - Nail Care',
        'attributes': [
            {
                name: "Brand",
                required: true,
                example: "",
                variationAllowed: false,
                type: "input",
            },
            {
                name: "Colour",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
            },
            {
                name: "Colour Name",
                required: false,
                example: "",
                variationAllowed: false,
                type: "input",
            },
            {
                name: "Gender",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
            },
            {
                name: "Concern",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
            },
            {
                name: "Ingredient",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
            },
            {
                name: "Conscious",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
            },
            {
                name: "Preference",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
            },
            {
                name: "Formulation",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
            },
            {
                name: "Skin Type",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
            },
        ]
    },
    {
        'category': 'Beauty and Personal Care',
        'subCategory': 'Makeup - Eyes',
        'attributes': [
            {
                name: "Brand",
                required: true,
                example: "",
                variationAllowed: false,
                type: "input",
            },
            {
                name: "Colour",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
            },
            {
                name: "Colour Name",
                required: false,
                example: "",
                variationAllowed: false,
                type: "input",
            },
            {
                name: "Gender",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
            },
            {
                name: "Concern",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
            },
            {
                name: "Ingredient",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
            },
            {
                name: "Conscious",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
            },
            {
                name: "Preference",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
            },
            {
                name: "Formulation",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
            },
            {
                name: "Skin Type",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
            },
        ]
    },
    {
        'category': 'Beauty and Personal Care',
        'subCategory': 'Makeup - Face',
        'attributes': [
            {
                name: "Brand",
                required: true,
                example: "",
                variationAllowed: false,
                type: "input",
            },
            {
                name: "Colour",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
            },
            {
                name: "Colour Name",
                required: false,
                example: "",
                variationAllowed: false,
                type: "input",
            },
            {
                name: "Gender",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
            },
            {
                name: "Concern",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
            },
            {
                name: "Ingredient",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
            },
            {
                name: "Conscious",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
            },
            {
                name: "Preference",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
            },
            {
                name: "Formulation",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
            },
            {
                name: "Skin Type",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
            },
        ]
    },
    {
        'category': 'Beauty and Personal Care',
        'subCategory': 'Makeup - Lips',
        'attributes': [
            {
                name: "Brand",
                required: true,
                example: "",
                variationAllowed: false,
                type: "input",
            },
            {
                name: "Colour",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
            },
            {
                name: "Colour Name",
                required: false,
                example: "",
                variationAllowed: false,
                type: "input",
            },
            {
                name: "Gender",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
            },
            {
                name: "Concern",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
            },
            {
                name: "Ingredient",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
            },
            {
                name: "Conscious",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
            },
            {
                name: "Preference",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
            },
            {
                name: "Formulation",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
            },
            {
                name: "Skin Type",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
            },
        ]
    },
    {
        'category': 'Beauty and Personal Care',
        'subCategory': 'Makeup - Body',
        'attributes': [
            {
                name: "Brand",
                required: true,
                example: "",
                variationAllowed: false,
                type: "input",
            },
            {
                name: "Colour",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
            },
            {
                name: "Colour Name",
                required: false,
                example: "",
                variationAllowed: false,
                type: "input",
            },
            {
                name: "Gender",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
            },
            {
                name: "Concern",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
            },
            {
                name: "Ingredient",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
            },
            {
                name: "Conscious",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
            },
            {
                name: "Preference",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
            },
            {
                name: "Formulation",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
            },
            {
                name: "Skin Type",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
            },
        ]
    },
    {
        'category': 'Beauty and Personal Care',
        'subCategory': 'Makeup - Remover',
        'attributes': [
            {
                name: "Brand",
                required: true,
                example: "",
                variationAllowed: false,
                type: "input",
            },
            {
                name: "Colour",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
            },
            {
                name: "Colour Name",
                required: false,
                example: "",
                variationAllowed: false,
                type: "input",
            },
            {
                name: "Gender",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
            },
            {
                name: "Concern",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
            },
            {
                name: "Ingredient",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
            },
            {
                name: "Conscious",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
            },
            {
                name: "Preference",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
            },
            {
                name: "Formulation",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
            },
            {
                name: "Skin Type",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
            },
        ]
    },
    {
        'category': 'Beauty and Personal Care',
        'subCategory': 'Makeup - Sets and Kits',
        'attributes': [
            {
                name: "Brand",
                required: true,
                example: "",
                variationAllowed: false,
                type: "input",
            },
            {
                name: "Colour",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
            },
            {
                name: "Colour Name",
                required: false,
                example: "",
                variationAllowed: false,
                type: "input",
            },
            {
                name: "Gender",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
            },
            {
                name: "Concern",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
            },
            {
                name: "Ingredient",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
            },
            {
                name: "Conscious",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
            },
            {
                name: "Preference",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
            },
            {
                name: "Formulation",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
            },
            {
                name: "Skin Type",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
            },
        ]
    },
    {
        'category': 'Beauty and Personal Care',
        'subCategory': 'Makeup - Tools and Brushes',
        'attributes': [
            {
                name: "Brand",
                required: true,
                example: "",
                variationAllowed: false,
                type: "input",
            },
            {
                name: "Colour",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
            },
            {
                name: "Colour Name",
                required: false,
                example: "",
                variationAllowed: false,
                type: "input",
            },
            {
                name: "Gender",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
            },
            {
                name: "Concern",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
            },
            {
                name: "Ingredient",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
            },
            {
                name: "Conscious",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
            },
            {
                name: "Preference",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
            },
            {
                name: "Formulation",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
            },
            {
                name: "Skin Type",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
            },
        ]
    },
    {
        'category': 'Beauty and Personal Care',
        'subCategory': 'Makeup - Kits and Combos',
        'attributes': [
            {
                name: "Brand",
                required: true,
                example: "",
                variationAllowed: false,
                type: "input",
            },
            {
                name: "Colour",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
            },
            {
                name: "Colour Name",
                required: false,
                example: "",
                variationAllowed: false,
                type: "input",
            },
            {
                name: "Gender",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
            },
            {
                name: "Concern",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
            },
            {
                name: "Ingredient",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
            },
            {
                name: "Conscious",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
            },
            {
                name: "Preference",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
            },
            {
                name: "Formulation",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
            },
            {
                name: "Skin Type",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
            },
        ]
    },
    {
        'category': 'Beauty and Personal Care',
        'subCategory': 'Skin Care - Face Cleansers',
        'attributes': [
            {
                name: "Brand",
                required: true,
                example: "",
                variationAllowed: false,
                type: "input",
            },
            {
                name: "Colour",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
            },
            {
                name: "Colour Name",
                required: false,
                example: "",
                variationAllowed: false,
                type: "input",
            },
            {
                name: "Gender",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
            },
            {
                name: "Concern",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
            },
            {
                name: "Ingredient",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
            },
            {
                name: "Conscious",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
            },
            {
                name: "Preference",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
            },
            {
                name: "Formulation",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
            },
            {
                name: "Skin Type",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
            },
        ]
    },
    {
        'category': 'Beauty and Personal Care',
        'subCategory': 'Skin Care - Hand and Feet',
        'attributes': [
            {
                name: "Brand",
                required: true,
                example: "",
                variationAllowed: false,
                type: "input",
            },
            {
                name: "Colour",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
            },
            {
                name: "Colour Name",
                required: false,
                example: "",
                variationAllowed: false,
                type: "input",
            },
            {
                name: "Gender",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
            },
            {
                name: "Concern",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
            },
            {
                name: "Ingredient",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
            },
            {
                name: "Conscious",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
            },
            {
                name: "Preference",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
            },
            {
                name: "Formulation",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
            },
            {
                name: "Skin Type",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
            },
        ]
    },
    {
        'category': 'Beauty and Personal Care',
        'subCategory': 'Body Care - Cleansers',
        'attributes': [
            {
                name: "Brand",
                required: true,
                example: "",
                variationAllowed: false,
                type: "input",
            },
            {
                name: "Colour",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
            },
            {
                name: "Colour Name",
                required: false,
                example: "",
                variationAllowed: false,
                type: "input",
            },
            {
                name: "Gender",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
            },
            {
                name: "Concern",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
            },
            {
                name: "Ingredient",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
            },
            {
                name: "Conscious",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
            },
            {
                name: "Preference",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
            },
            {
                name: "Formulation",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
            },
            {
                name: "Skin Type",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
            },
        ]
    },
    {
        'category': 'Beauty and Personal Care',
        'subCategory': 'Body Care - Moisturizers',
        'attributes': [
            {
                name: "Brand",
                required: true,
                example: "",
                variationAllowed: false,
                type: "input",
            },
            {
                name: "Colour",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
            },
            {
                name: "Colour Name",
                required: false,
                example: "",
                variationAllowed: false,
                type: "input",
            },
            {
                name: "Gender",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
            },
            {
                name: "Concern",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
            },
            {
                name: "Ingredient",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
            },
            {
                name: "Conscious",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
            },
            {
                name: "Preference",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
            },
            {
                name: "Formulation",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
            },
            {
                name: "Skin Type",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
            },
        ]
    },
    {
        'category': 'Beauty and Personal Care',
        'subCategory': 'Body Care - Loofah and Other Tools',
        'attributes': [
            {
                name: "Brand",
                required: true,
                example: "",
                variationAllowed: false,
                type: "input",
            },
            {
                name: "Colour",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
            },
            {
                name: "Colour Name",
                required: false,
                example: "",
                variationAllowed: false,
                type: "input",
            },
            {
                name: "Gender",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
            },
            {
                name: "Concern",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
            },
            {
                name: "Ingredient",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
            },
            {
                name: "Conscious",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
            },
            {
                name: "Preference",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
            },
            {
                name: "Formulation",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
            },
            {
                name: "Skin Type",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
            },
        ]
    },
    {
        'category': 'Beauty and Personal Care',
        'subCategory': 'Body Care - Bath Salt and Additives',
        'attributes': [
            {
                name: "Brand",
                required: true,
                example: "",
                variationAllowed: false,
                type: "input",
            },
            {
                name: "Colour",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
            },
            {
                name: "Colour Name",
                required: false,
                example: "",
                variationAllowed: false,
                type: "input",
            },
            {
                name: "Gender",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
            },
            {
                name: "Concern",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
            },
            {
                name: "Ingredient",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
            },
            {
                name: "Conscious",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
            },
            {
                name: "Preference",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
            },
            {
                name: "Formulation",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
            },
            {
                name: "Skin Type",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
            },
        ]
    },
    {
        'category': 'Beauty and Personal Care',
        'subCategory': 'Hair Care - Shampoo, Oils, Conditioners',
        'attributes': [
            {
                name: "Brand",
                required: true,
                example: "",
                variationAllowed: false,
                type: "input",
            },
            {
                name: "Colour",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
            },
            {
                name: "Colour Name",
                required: false,
                example: "",
                variationAllowed: false,
                type: "input",
            },
            {
                name: "Gender",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
            },
            {
                name: "Concern",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
            },
            {
                name: "Ingredient",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
            },
            {
                name: "Conscious",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
            },
            {
                name: "Preference",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
            },
            {
                name: "Formulation",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
            },
            {
                name: "Skin Type",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
            },
        ]
    },
    {
        'category': 'Beauty and Personal Care',
        'subCategory': 'Skin Care - Lotions, Moisturisers, and Creams',
        'attributes': [
            {
                name: "Brand",
                required: true,
                example: "",
                variationAllowed: false,
                type: "input",
            },
            {
                name: "Colour",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
            },
            {
                name: "Colour Name",
                required: false,
                example: "",
                variationAllowed: false,
                type: "input",
            },
            {
                name: "Gender",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
            },
            {
                name: "Concern",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
            },
            {
                name: "Ingredient",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
            },
            {
                name: "Conscious",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
            },
            {
                name: "Preference",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
            },
            {
                name: "Formulation",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
            },
            {
                name: "Skin Type",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
            },
        ]
    },
    {
        'category': 'Beauty and Personal Care',
        'subCategory': 'Skin Care - Oils and Serums',
        'attributes': [
            {
                name: "Brand",
                required: true,
                example: "",
                variationAllowed: false,
                type: "input",
            },
            {
                name: "Colour",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
            },
            {
                name: "Colour Name",
                required: false,
                example: "",
                variationAllowed: false,
                type: "input",
            },
            {
                name: "Gender",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
            },
            {
                name: "Concern",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
            },
            {
                name: "Ingredient",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
            },
            {
                name: "Conscious",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
            },
            {
                name: "Preference",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
            },
            {
                name: "Formulation",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
            },
            {
                name: "Skin Type",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
            },
        ]
    },
    {
        'category': 'Beauty and Personal Care',
        'subCategory': 'Gift Voucher',
        'attributes': []
    },

    {
        'category': 'Food and Beverages',
        'subCategory': 'Food and Beverages',
        'attributes': [

        ]
    },
    {
        'category': 'Fashion',
        'subCategory': 'Shirts',
        'attributes': [
            {
                "name": "Gender",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Colour",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Size",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input",
            },
            {
                "name": "Brand",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Size Chart",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "upload"
            },
            {
                "name": "Fabric",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Colour Name",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Sport Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Care Instructions",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Wash Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Weight",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Breadth",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Height",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Features",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Fabric Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Material",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Material Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Pattern",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Occasion",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Season",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Trend",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Fit",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Collar",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Neck",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Bundles",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Max Sale Quantity",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Num Pockets",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Reversible",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Sleeve Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Fragile",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Liquid",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Hazardous",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            }
        ]
    },
    {
        'category': 'Fashion',
        'subCategory': 'T Shirts',
        "attributes": [
            {
                "name": "Gender",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Colour",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Size",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input",
            },
            {
                "name": "Brand",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Size Chart",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Fabric",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Colour Name",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Sport Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Care Instructions",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Wash Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Weight",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Breadth",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Height",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Features",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Fabric Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Material",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Material Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Pattern",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Occasion",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Season",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Trend",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Fit",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Collar",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Neck",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Bundles",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Max Sale Quantity",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Num Pockets",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Sleeve Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Fragile",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Liquid",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Hazardous",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Sustainability",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            }
        ]
    },
    {
        'category': 'Fashion',
        'subCategory': 'Sweatshirts',
        "attributes": [
            {
                "name": "Gender",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Colour",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Size",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input",
            },
            {
                "name": "Brand",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Size Chart",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Fabric",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Colour Name",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Sport Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Care Instructions",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Wash Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Weight",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Breadth",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Height",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Features",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Fabric Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Material",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Material Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Pattern",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Occasion",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Season",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Trend",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Fit",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Collar",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Neck",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Bundles",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Max Sale Quantity",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Lining",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Num Pockets",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Reversible",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Sleeve Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Sweatshirt Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Fragile",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Liquid",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Hazardous",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Waist Rise",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            }
        ]
    },
    {
        'category': 'Fashion',
        'subCategory': 'Kurtas & Kurta Sets',
        "attributes": [
            {
                "name": "Gender",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Colour",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Size",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input",
            },
            {
                "name": "Brand",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Size Chart",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Fabric",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Colour Name",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Care Instructions",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Wash Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Weight",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Breadth",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Height",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Features",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Fabric Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Material",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Material Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Pattern",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Occasion",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Season",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Trend",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Fit",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Collar",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Neck",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Bundles",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Max Sale Quantity",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Lining",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Num Pockets",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Sleeve Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Fragile",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Liquid",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Hazardous",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Ornamentation",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Sustainability",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Handcrafted",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Craftmark",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            }
        ]
    },
    {
        'category': 'Fashion',
        'subCategory': 'Jackets & Coats',
        "attributes": [
            {
                "name": "Gender",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Colour",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Size",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input",
            },
            {
                "name": "Brand",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Size Chart",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Fabric",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Colour Name",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Sport Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Care Instructions",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Wash Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Weight",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Breadth",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Height",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Features",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Fabric Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Material",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Material Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Pattern",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Occasion",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Season",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Trend",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Fit",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Collar",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Neck",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Bundles",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Max Sale Quantity",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Lining",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Num Pockets",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Reversible",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Front Styling",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Sleeve Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Fragile",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Liquid",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Hazardous",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Sustainability",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Handcrafted",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Craftmark",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            }
        ]
    },
    {
        'category': 'Fashion',
        'subCategory': 'Sweaters',
        "attributes": [
            {
                "name": "Gender",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Colour",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Size",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input",
            },
            {
                "name": "Brand",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Size Chart",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Fabric",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Colour Name",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Sport Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Care Instructions",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Wash Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Weight",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Breadth",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Height",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Features",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Fabric Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Material",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Material Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Pattern",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Occasion",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Season",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Trend",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Fit",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Collar",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Neck",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Bundles",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Max Sale Quantity",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Num Pockets",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Reversible",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Sleeve Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Fragile",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Liquid",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Hazardous",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            }
        ]
    },
    {
        'category': 'Fashion',
        'subCategory': 'Suits',
        "attributes": [
            {
                "name": "Gender",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Colour",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Size",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input",
            },
            {
                "name": "Brand",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Size Chart",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Fabric",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Colour Name",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Care Instructions",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Wash Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Weight",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Breadth",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Height",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Features",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Fabric Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Material",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Material Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Pattern",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Occasion",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Season",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Trend",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Fit",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Collar",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Neck",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Bundles",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Max Sale Quantity",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Lining",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Num Pockets",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Front Styling",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Sleeve Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Fragile",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Liquid",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Hazardous",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Ornamentation",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            }
        ]
    },
    {
        'category': 'Fashion',
        'subCategory': 'Sherwanis',
        "attributes": [
            {
                "name": "Gender",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Colour",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Size",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input",
            },
            {
                "name": "Brand",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Size Chart",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Fabric",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Colour Name",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Care Instructions",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Wash Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Weight",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Breadth",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Height",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Features",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Fabric Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Material",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Material Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Pattern",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Occasion",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Season",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Trend",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Fit",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Collar",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Neck",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Bundles",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Max Sale Quantity",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Sleeve Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Fragile",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Liquid",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Hazardous",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Sustainability",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Handcrafted",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Craftmark",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            }
        ]
    },
    {
        'category': 'Fashion',
        'subCategory': 'Track Shirts',
        "attributes": [
            {
                "name": "Gender",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Colour",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Size",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input",
            },
            {
                "name": "Brand",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Size Chart",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Fabric",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Colour Name",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Sport Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Care Instructions",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Wash Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Weight",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Breadth",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Height",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Features",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Fabric Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Material",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Material Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Pattern",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Occasion",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Season",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Trend",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Fit",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Collar",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Neck",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Bundles",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Max Sale Quantity",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Num Pockets",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Sleeve Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Fragile",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Liquid",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Hazardous",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            }
        ]
    },
    {
        'category': 'Fashion',
        'subCategory': 'Track Suits',
        'attributes': [
            {
                "name": "Gender",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Colour",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Size",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input",
            },
            {
                "name": "Brand",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Size Chart",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Fabric",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Colour Name",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Sport Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Care Instructions",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Wash Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Weight",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Breadth",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Height",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Features",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Fabric Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Material",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Material Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Pattern",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Occasion",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Season",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Trend",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Fit",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Collar",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Neck",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Bundles",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Max Sale Quantity",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Num Pockets",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Sleeve Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Fragile",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Liquid",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Hazardous",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            }
        ]
    },
    {
        'category': 'Fashion',
        'subCategory': 'Unstitched Fabrics',
        'attributes': [
            {
                "name": "Gender",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Colour",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Size",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input",
            },
            {
                "name": "Brand",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Fabric",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Colour Name",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Care Instructions",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Wash Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Weight",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Breadth",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Height",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Features",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Fabric Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Material",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Material Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Pattern",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Occasion",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Season",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Trend",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Fit",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Bundles",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Max Sale Quantity",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Fragile",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Liquid",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Hazardous",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Sustainability",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Handcrafted",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Craftmark",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            }
        ]
    },
    {
        'category': 'Fashion',
        'subCategory': 'Dresses',
        'attributes': [
            {
                "name": "Gender",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Colour",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Size",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input",
            },
            {
                "name": "Brand",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Size Chart",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Fabric",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Colour Name",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Sport Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Care Instructions",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Wash Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Weight",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Breadth",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Height",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Features",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Fabric Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Material",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Material Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Pattern",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Occasion",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Season",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Trend",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Fit",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Collar",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Neck",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Bundles",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Max Sale Quantity",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Num Pockets",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Sleeve Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Fragile",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Liquid",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Hazardous",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Sustainability",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Handcrafted",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Craftmark",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            }
        ]
    },
    {
        'category': 'Fashion',
        'subCategory': 'Tops',
        'attributes': [
            {
                "name": "Gender",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Colour",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Size",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input",
            },
            {
                "name": "Brand",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Size Chart",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Fabric",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Colour Name",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Sport Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Care Instructions",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Wash Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Weight",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Breadth",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Height",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Features",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Fabric Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Material",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Material Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Pattern",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Occasion",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Season",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Trend",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Fit",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Collar",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Neck",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Bundles",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Max Sale Quantity",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Num Pockets",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Reversible",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Top Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Sleeve Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Fragile",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Liquid",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Hazardous",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Sustainability",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Handcrafted",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Craftmark",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            }
        ]
    },
    {
        'category': 'Fashion',
        'subCategory': 'Trousers',
        'attributes': [
            {
                "name": "Gender",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Colour",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Size",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input",
            },
            {
                "name": "Brand",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Size Chart",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Fabric",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Colour Name",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Sport Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Care Instructions",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Wash Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Weight",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Breadth",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Height",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Features",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Fabric Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Material",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Material Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Pattern",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Occasion",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Season",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Trend",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Fit",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Collar",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Neck",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Bundles",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Max Sale Quantity",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Num Pockets",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Bottom Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Sleeve Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Fragile",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Liquid",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Hazardous",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Waist Rise",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            }
        ]
    },
    {
        'category': 'Fashion',
        'subCategory': 'Capris',
        'attributes': [
            {
                "name": "Gender",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Colour",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Size",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input",
            },
            {
                "name": "Brand",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Size Chart",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Fabric",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Colour Name",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Sport Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Care Instructions",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Wash Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Weight",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Breadth",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Height",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Features",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Fabric Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Material",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Material Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Pattern",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Occasion",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Season",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Trend",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Fit",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Collar",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Neck",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Bundles",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Max Sale Quantity",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Num Pockets",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Bottom Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Sleeve Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Fragile",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Liquid",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Hazardous",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Waist Rise",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            }
        ]
    },
    {
        'category': 'Fashion',
        'subCategory': 'Coordinates',
        'attributes': [
            {
                "name": "Gender",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Colour",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Size",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input",
            },
            {
                "name": "Brand",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Size Chart",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Fabric",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Colour Name",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Sport Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Care Instructions",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Wash Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Weight",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Breadth",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Height",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Features",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Fabric Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Material",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Material Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Pattern",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Occasion",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Season",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Trend",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Fit",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Collar",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Neck",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Bundles",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Max Sale Quantity",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Num Pockets",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Sleeve Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Fragile",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Liquid",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Hazardous",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            }
        ]
    },
    {
        'category': 'Fashion',
        'subCategory': 'Playsuits',
        'attributes': [
            {
                "name": "Gender",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Colour",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Size",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input",
            },
            {
                "name": "Brand",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Size Chart",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Fabric",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Colour Name",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Sport Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Care Instructions",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Wash Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Weight",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Breadth",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Height",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Features",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Fabric Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Material",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Material Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Pattern",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Occasion",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Season",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Trend",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Fit",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Collar",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Neck",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Bundles",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Max Sale Quantity",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Num Pockets",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Sleeve Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Fragile",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Liquid",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Hazardous",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            }
        ]
    },
    {
        'category': 'Fashion',
        'subCategory': 'Jumpsuits',
        'attributes': [
            {
                "name": "Gender",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Colour",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Size",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input",
            },
            {
                "name": "Brand",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Size Chart",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Fabric",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Colour Name",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Sport Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Care Instructions",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Wash Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Weight",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Breadth",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Height",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Features",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Fabric Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Material",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Material Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Pattern",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Occasion",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Season",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Trend",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Fit",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Collar",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Neck",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Bundles",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Max Sale Quantity",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Num Pockets",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Sleeve Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Fragile",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Liquid",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Hazardous",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            }
        ]
    },
    {
        'category': 'Fashion',
        'subCategory': 'Shrugs & Blouses',
        'attributes': [
            {
                "name": "Gender",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Colour",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Size",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input",
            },
            {
                "name": "Brand",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Size Chart",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Fabric",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Colour Name",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Sport Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Care Instructions",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Wash Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Weight",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Breadth",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Height",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Features",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Fabric Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Material",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Material Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Pattern",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Occasion",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Season",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Trend",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Fit",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Collar",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Neck",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Bundles",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Max Sale Quantity",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Num Pockets",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Sleeve Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Fragile",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Liquid",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Hazardous",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            }
        ]
    },
    {
        'category': 'Fashion',
        'subCategory': 'Blazers & Waistcoats',
        'attributes': [
            {
                "name": "Gender",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Colour",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Size",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input",
            },
            {
                "name": "Brand",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Size Chart",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Fabric",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Colour Name",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Sport Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Care Instructions",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Wash Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Weight",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Breadth",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Height",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Features",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Fabric Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Material",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Material Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Pattern",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Occasion",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Season",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Trend",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Fit",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Collar",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Neck",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Bundles",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Max Sale Quantity",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Num Pockets",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Reversible",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Sleeve Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Fragile",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Liquid",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Hazardous",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            }
        ]
    },
    {
        'category': 'Fashion',
        'subCategory': 'Tights, Leggings & Jeggings',
        'attributes': [
            {
                "name": "Gender",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Colour",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Size",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input",
            },
            {
                "name": "Brand",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Size Chart",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Fabric",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Colour Name",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Sport Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Care Instructions",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Wash Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Weight",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Breadth",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Height",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Features",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Fabric Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Material",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Material Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Pattern",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Occasion",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Season",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Trend",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Fit",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Collar",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Neck",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Bundles",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Max Sale Quantity",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Num Pockets",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Sleeve Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Fragile",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Liquid",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Hazardous",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            }
        ]
    },
    {
        'category': 'Fashion',
        'subCategory': 'Track Pants',
        'attributes': [
            {
                "name": "Gender",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Colour",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Size",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input",
            },
            {
                "name": "Brand",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Size Chart",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Fabric",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Colour Name",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Sport Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Care Instructions",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Wash Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Weight",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Breadth",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Height",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Features",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Fabric Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Material",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Material Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Pattern",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Occasion",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Season",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Trend",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Fit",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Collar",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Neck",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Bundles",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Max Sale Quantity",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Num Pockets",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Sleeve Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Fragile",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Liquid",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Hazardous",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            }
        ]
    },
    {
        'category': 'Fashion',
        'subCategory': 'Jeans',
        'attributes': [
            {
                "name": "Gender",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Colour",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Size",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input",
            },
            {
                "name": "Brand",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Size Chart",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Fabric",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Colour Name",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Sport Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Care Instructions",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Wash Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Weight",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Breadth",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Height",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Features",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Fabric Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Material",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Material Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Pattern",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Occasion",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Season",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Trend",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Fit",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Collar",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Neck",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Bundles",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Max Sale Quantity",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Num Pockets",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Sleeve Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Fragile",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Liquid",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Hazardous",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Waist Rise",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            }
        ]
    },
    {
        'category': 'Fashion',
        'subCategory': 'Shorts',
        'attributes': [
            {
                "name": "Gender",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Colour",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Size",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input",
            },
            {
                "name": "Brand",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Size Chart",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Fabric",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Colour Name",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Sport Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Care Instructions",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Wash Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Weight",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Breadth",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Height",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Features",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Fabric Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Material",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Material Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Pattern",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Occasion",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Season",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Trend",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Fit",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Bundles",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Max Sale Quantity",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Num Pockets",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Fragile",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Liquid",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Hazardous",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            }
        ]
    },
    {
        'category': 'Fashion',
        'subCategory': 'Joggers',
        'attributes': [
            {
                "name": "Gender",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Colour",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Size",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input",
            },
            {
                "name": "Brand",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Size Chart",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Fabric",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Colour Name",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Care Instructions",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Wash Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Weight",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Breadth",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Height",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Features",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Fabric Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Material",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Material Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Pattern",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Occasion",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Season",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Trend",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Fit",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Bundles",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Max Sale Quantity",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Num Pockets",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Fragile",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Liquid",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Hazardous",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            }
        ]
    },
    {
        'category': 'Fashion',
        'subCategory': 'Dhotis & Dhoti Pants',
        'attributes': [
            {
                "name": "Gender",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Colour",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Size",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input",
            },
            {
                "name": "Brand",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Size Chart",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Fabric",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Colour Name",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Care Instructions",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Wash Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Weight",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Breadth",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Height",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Features",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Fabric Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Material",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Material Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Pattern",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Occasion",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Season",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Trend",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Fit",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Bundles",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Max Sale Quantity",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Num Pockets",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Fragile",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Liquid",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Hazardous",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            }
        ]
    },
    {
        'category': 'Fashion',
        'subCategory': 'Churidars',
        'attributes': [
            {
                "name": "Gender",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Colour",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Size",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input",
            },
            {
                "name": "Brand",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Size Chart",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Fabric",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Colour Name",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Care Instructions",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Wash Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Weight",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Breadth",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Height",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Features",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Fabric Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Material",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Material Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Pattern",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Occasion",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Season",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Trend",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Fit",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Bundles",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Max Sale Quantity",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Num Pockets",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Fragile",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Liquid",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Hazardous",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Sustainability",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Handcrafted",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Craftmark",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            }
        ]
    },
    {
        'category': 'Fashion',
        'subCategory': 'Salwars',
        'attributes': [
            {
                "name": "Gender",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Colour",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Size",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input",
            },
            {
                "name": "Brand",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Size Chart",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Fabric",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Colour Name",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Care Instructions",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Wash Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Weight",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Breadth",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Height",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Features",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Fabric Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Material",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Material Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Pattern",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Occasion",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Season",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Trend",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Fit",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Bundles",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Max Sale Quantity",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Hemline",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Num Pockets",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Fragile",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Liquid",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Hazardous",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Sustainability",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Handcrafted",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Craftmark",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            }
        ]
    },
    {
        'category': 'Fashion',
        'subCategory': 'Dungarees & Jumpsuits',
        'attributes': [
            {
                "name": "Gender",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Colour",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Size",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input",
            },
            {
                "name": "Brand",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Size Chart",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Fabric",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Colour Name",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Care Instructions",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Wash Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Weight",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Breadth",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Height",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Features",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Fabric Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Material",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Material Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Pattern",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Occasion",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Season",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Trend",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Fit",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Collar",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Neck",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Bundles",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Max Sale Quantity",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Num Pockets",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Sleeve Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Fragile",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Liquid",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Hazardous",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            }
        ]
    },
    {
        'category': 'Fashion',
        'subCategory': 'Skirts',
        'attributes': [
            {
                "name": "Gender",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Colour",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Size",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input",
            },
            {
                "name": "Brand",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Size Chart",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Fabric",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Colour Name",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Sport Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Care Instructions",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Wash Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Weight",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Breadth",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Height",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Features",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Fabric Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Material",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Material Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Pattern",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Occasion",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Season",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Trend",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Fit",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Collar",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Neck",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Bundles",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Max Sale Quantity",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Hemline",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Num Pockets",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Sleeve Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Fragile",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Liquid",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Hazardous",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Waist Rise",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            }
        ]
    },
    {
        'category': 'Fashion',
        'subCategory': 'Clothing Sets',
        'attributes': [
            {
                "name": "Gender",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Colour",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Size",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input",
            },
            {
                "name": "Brand",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Size Chart",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Fabric",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Colour Name",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Care Instructions",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Wash Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Weight",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Breadth",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Height",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Features",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Fabric Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Material",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Material Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Pattern",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Occasion",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Season",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Trend",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Fit",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Collar",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Neck",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Bundles",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Max Sale Quantity",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Num Pockets",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Sleeve Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Fragile",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Liquid",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Hazardous",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            }
        ]
    },
    {
        'category': 'Fashion',
        'subCategory': 'Belts',
        'attributes': [
            {
                "name": "Gender",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Colour",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Size",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input",
            },
            {
                "name": "Brand",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Size Chart",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Colour Name",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Care Instructions",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Weight",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Breadth",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Height",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Features",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Material",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Material Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Pattern",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Occasion",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Season",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Trend",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Bundles",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Reversible",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Fragile",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Liquid",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Hazardous",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Buckle Material",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Buckle Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            }
        ]
    },
    {
        'category': 'Fashion',
        'subCategory': 'Caps & Hats',
        'attributes': [
            {
                "name": "Gender",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Colour",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Size",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input",
            },
            {
                "name": "Brand",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Colour Name",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Care Instructions",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Weight",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Breadth",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Height",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Features",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Material",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Material Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Pattern",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Occasion",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Season",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Trend",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Bundles",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Fragile",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Liquid",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Hazardous",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            }
        ]
    },
    {
        'category': 'Fashion',
        'subCategory': 'Kurtis, Tunics',
        'attributes': [
            {
                "name": "Gender",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Colour",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Size",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input",
            },
            {
                "name": "Brand",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Size Chart",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Fabric",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Colour Name",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Care Instructions",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Wash Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Weight",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Breadth",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Height",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Features",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Fabric Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Material",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Material Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Pattern",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Occasion",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Season",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Trend",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Fit",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Collar",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Neck",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Bundles",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Max Sale Quantity",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Hemline",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Lining",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Num Pockets",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Sleeve Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Fragile",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Liquid",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Hazardous",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Ornamentation",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Sustainability",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Handcrafted",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Craftmark",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            }
        ]
    },
    {
        'category': 'Fashion',
        'subCategory': 'Sarees',
        'attributes': [
            {
                "name": "Gender",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Colour",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Size",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input",
            },
            {
                "name": "Brand",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Size Chart",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Fabric",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Colour Name",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Care Instructions",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Wash Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Weight",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Breadth",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Height",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Features",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Fabric Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Material",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Material Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Pattern",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Occasion",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Season",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Trend",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Fit",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Collar",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Neck",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Bundles",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Max Sale Quantity",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Lining",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Sleeve Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Fragile",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Liquid",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Hazardous",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Ornamentation",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Sustainability",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Handcrafted",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Craftmark",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            }
        ]
    },
    {
        'category': 'Fashion',
        'subCategory': 'Ethnic Wear',
        'attributes': [
            {
                "name": "Gender",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Colour",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Size",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input",
            },
            {
                "name": "Brand",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Size Chart",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Fabric",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Colour Name",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Care Instructions",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Wash Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Weight",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Breadth",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Height",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Features",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Fabric Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Material",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Material Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Pattern",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Occasion",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Season",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Trend",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Fit",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Collar",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Neck",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Bundles",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Max Sale Quantity",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Lining",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Num Pockets",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Sleeve Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Fragile",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Liquid",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Hazardous",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Ornamentation",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Sustainability",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Handcrafted",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Craftmark",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            }
        ]
    },
    {
        'category': 'Fashion',
        'subCategory': 'Palazzos',
        'attributes': [
            {
                "name": "Gender",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Colour",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Size",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input",
            },
            {
                "name": "Brand",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Size Chart",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Fabric",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Colour Name",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Care Instructions",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Wash Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Weight",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Breadth",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Height",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Features",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Fabric Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Material",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Material Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Pattern",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Occasion",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Season",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Trend",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Fit",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Collar",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Neck",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Bundles",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Max Sale Quantity",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Hemline",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Lining",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Sleeve Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Fragile",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Liquid",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Hazardous",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Ornamentation",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Sustainability",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Handcrafted",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Craftmark",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            }
        ]
    },
    {
        'category': 'Fashion',
        'subCategory': 'Dress Materials',
        'attributes': [
            {
                "name": "Gender",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Colour",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Size",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input",
            },
            {
                "name": "Brand",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Size Chart",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Fabric",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Colour Name",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Care Instructions",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Wash Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Weight",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Breadth",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Height",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Features",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Fabric Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Material",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Material Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Pattern",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Occasion",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Season",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Trend",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Fit",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Collar",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Neck",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Bundles",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Max Sale Quantity",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Lining",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Sleeve Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Fragile",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Liquid",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Hazardous",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Ornamentation",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Sustainability",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Handcrafted",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Craftmark",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            }
        ]
    },
    {
        'category': 'Fashion',
        'subCategory': 'Lehenga Cholis',
        'attributes': [
            {
                "name": "Gender",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Colour",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Size",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input",
            },
            {
                "name": "Brand",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Size Chart",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Fabric",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Colour Name",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Care Instructions",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Wash Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Weight",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Breadth",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Height",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Features",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Fabric Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Material",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Material Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Pattern",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Occasion",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Season",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Trend",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Fit",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Collar",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Neck",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Bundles",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Max Sale Quantity",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Hemline",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Lining",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Sleeve Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Fragile",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Liquid",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Hazardous",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Ornamentation",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Sustainability",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Handcrafted",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Craftmark",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            }
        ]
    },
    {
        'category': 'Fashion',
        'subCategory': 'Dupattas & Shawls',
        'attributes': [
            {
                "name": "Gender",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Colour",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Size",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input",
            },
            {
                "name": "Brand",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Size Chart",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Fabric",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Colour Name",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Care Instructions",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Wash Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Weight",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Breadth",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Height",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Features",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Fabric Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Material",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Material Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Pattern",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Occasion",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Season",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Trend",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Fit",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Collar",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Neck",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Bundles",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Max Sale Quantity",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Lining",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Sleeve Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Fragile",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Liquid",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Hazardous",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Ornamentation",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Sustainability",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Handcrafted",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Craftmark",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            }
        ]
    },
    {
        'category': 'Fashion',
        'subCategory': 'Burqas & Hijabs',
        'attributes': [
            {
                "name": "Gender",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Colour",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Size",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input",
            },
            {
                "name": "Brand",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Size Chart",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Fabric",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Colour Name",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Care Instructions",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Wash Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Weight",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Breadth",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Height",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Features",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Fabric Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Material",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Material Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Pattern",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Occasion",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Season",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Trend",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Fit",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Collar",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Neck",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Bundles",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Max Sale Quantity",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Lining",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Sleeve Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Fragile",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Liquid",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Hazardous",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Ornamentation",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Sustainability",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Handcrafted",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Craftmark",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            }
        ]
    },
    {
        'category': 'Fashion',
        'subCategory': 'Blouses',
        'attributes': [
            {
                "name": "Gender",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Colour",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Size",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input",
            },
            {
                "name": "Brand",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Size Chart",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Fabric",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Colour Name",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Care Instructions",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Wash Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Weight",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Breadth",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Height",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Features",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Fabric Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Material",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Material Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Pattern",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Occasion",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Season",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Trend",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Fit",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Collar",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Neck",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Bundles",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Max Sale Quantity",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Lining",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Sleeve Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Fragile",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Liquid",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Hazardous",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Ornamentation",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Sustainability",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Handcrafted",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Craftmark",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            }
        ]
    },
    {
        'category': 'Fashion',
        'subCategory': 'Blouse Pieces',
        'attributes': [
            {
                "name": "Gender",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Colour",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Size",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input",
            },
            {
                "name": "Brand",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Size Chart",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Fabric",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Colour Name",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Care Instructions",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Wash Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Weight",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Breadth",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Height",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Features",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Fabric Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Material",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Material Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Pattern",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Occasion",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Season",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Trend",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Fit",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Collar",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Neck",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Bundles",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Max Sale Quantity",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Lining",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Sleeve Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Fragile",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Liquid",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Hazardous",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Ornamentation",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Sustainability",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Handcrafted",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Craftmark",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            }
        ]
    },
    {
        'category': 'Fashion',
        'subCategory': 'Briefs',
        'attributes': [
            {
                "name": "Gender",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Colour",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Size",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input",
            },
            {
                "name": "Brand",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Size Chart",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Fabric",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Colour Name",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Care Instructions",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Wash Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Weight",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Breadth",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Height",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Features",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Fabric Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Material",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Material Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Pattern",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Occasion",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Season",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Trend",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Fit",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Bundles",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Max Sale Quantity",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Fragile",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Liquid",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Hazardous",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            }
        ]
    },
    {
        'category': 'Fashion',
        'subCategory': 'Boxers',
        'attributes': [
            {
                "name": "Gender",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Colour",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Size",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input",
            },
            {
                "name": "Brand",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Size Chart",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Fabric",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Colour Name",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Care Instructions",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Wash Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Weight",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Breadth",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Height",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Features",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Fabric Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Material",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Material Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Pattern",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Occasion",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Season",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Trend",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Fit",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Bundles",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Max Sale Quantity",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Fragile",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Liquid",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Hazardous",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            }
        ]
    },
    {
        'category': 'Fashion',
        'subCategory': 'Vests',
        'attributes': [
            {
                "name": "Gender",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Colour",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Size",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input",
            },
            {
                "name": "Brand",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Size Chart",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Fabric",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Colour Name",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Care Instructions",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Wash Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Weight",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Breadth",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Height",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Features",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Fabric Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Material",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Material Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Pattern",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Occasion",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Season",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Trend",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Fit",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Bundles",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Max Sale Quantity",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Fragile",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Liquid",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Hazardous",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            }
        ]
    },
    {
        'category': 'Fashion',
        'subCategory': 'Robes',
        'attributes': [
            {
                "name": "Gender",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Colour",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Size",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input",
            },
            {
                "name": "Brand",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Size Chart",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Fabric",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Colour Name",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Care Instructions",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Wash Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Weight",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Breadth",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Height",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Features",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Fabric Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Material",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Material Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Pattern",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Occasion",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Season",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Trend",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Fit",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Bundles",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Max Sale Quantity",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Lining",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Fragile",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Liquid",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Hazardous",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            }
        ]
    },
    {
        'category': 'Fashion',
        'subCategory': 'Night Suits',
        'attributes': [
            {
                "name": "Gender",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Colour",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Size",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input",
            },
            {
                "name": "Brand",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Size Chart",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Fabric",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Colour Name",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Care Instructions",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Wash Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Weight",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Breadth",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Height",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Features",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Fabric Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Material",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Material Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Pattern",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Occasion",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Season",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Trend",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Fit",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Bundles",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Max Sale Quantity",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Lining",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Num Pockets",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Fragile",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Liquid",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Hazardous",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            }
        ]
    },
    {
        'category': 'Fashion',
        'subCategory': 'Thermal Wear',
        'attributes': [
            {
                "name": "Gender",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Colour",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Size",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input",
            },
            {
                "name": "Brand",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Size Chart",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Fabric",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Colour Name",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Care Instructions",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Wash Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Weight",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Breadth",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Height",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Features",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Fabric Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Material",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Material Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Pattern",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Occasion",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Season",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Trend",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Fit",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Bundles",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Max Sale Quantity",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Lining",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Fragile",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Liquid",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Hazardous",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            }
        ]
    },
    {
        'category': 'Fashion',
        'subCategory': 'Swim Bottoms',
        'attributes': [
            {
                "name": "Gender",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Colour",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Size",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input",
            },
            {
                "name": "Brand",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Size Chart",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Fabric",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Colour Name",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Care Instructions",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Wash Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Weight",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Breadth",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Height",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Features",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Fabric Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Material",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Material Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Pattern",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Occasion",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Season",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Trend",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Fit",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Bundles",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Max Sale Quantity",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Fragile",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Liquid",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Hazardous",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            }
        ]
    },
    {
        'category': 'Fashion',
        'subCategory': 'Swimwear',
        'attributes': [
            {
                "name": "Gender",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Colour",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Size",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input",
            },
            {
                "name": "Brand",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Size Chart",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Fabric",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Colour Name",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Care Instructions",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Wash Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Weight",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Breadth",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Height",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Features",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Fabric Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Material",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Material Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Pattern",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Occasion",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Season",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Trend",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Fit",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Bundles",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Max Sale Quantity",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Fragile",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Liquid",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Hazardous",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            }
        ]
    },
    {
        'category': 'Fashion',
        'subCategory': 'Bra',
        'attributes': [
            {
                "name": "Gender",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Colour",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Size",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input",
            },
            {
                "name": "Brand",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Size Chart",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Fabric",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Colour Name",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Care Instructions",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Wash Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Weight",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Breadth",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Height",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Features",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Fabric Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Material",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Material Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Pattern",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Occasion",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Season",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Trend",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Fit",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Bundles",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Max Sale Quantity",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Lining",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Fragile",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Liquid",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Hazardous",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Coverage",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Padding",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            }
        ]
    },
    {
        'category': 'Fashion',
        'subCategory': 'Shapewear',
        'attributes': [
            {
                "name": "Gender",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Colour",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Size",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input",
            },
            {
                "name": "Brand",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Size Chart",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Fabric",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Colour Name",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Care Instructions",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Wash Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Weight",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Breadth",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Height",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Features",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Fabric Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Material",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Material Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Pattern",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Occasion",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Season",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Trend",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Fit",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Bundles",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Max Sale Quantity",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Lining",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Fragile",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Liquid",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Hazardous",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Coverage",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Padding",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            }
        ]
    },
    {
        'category': 'Fashion',
        'subCategory': 'Sleepwear & Loungewear',
        'attributes': [
            {
                "name": "Gender",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Colour",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Size",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input",
            },
            {
                "name": "Brand",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Size Chart",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Fabric",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Colour Name",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Care Instructions",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Wash Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Weight",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Breadth",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Height",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Features",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Fabric Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Material",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Material Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Pattern",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Occasion",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Season",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Trend",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Fit",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Bundles",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Max Sale Quantity",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Lining",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Fragile",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Liquid",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Hazardous",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            }
        ]
    },
    {
        'category': 'Fashion',
        'subCategory': 'Camisoles',
        'attributes': [
            {
                "name": "Gender",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Colour",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Size",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input",
            },
            {
                "name": "Brand",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Size Chart",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Fabric",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Colour Name",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Care Instructions",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Wash Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Weight",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Breadth",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Height",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Features",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Fabric Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Material",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Material Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Pattern",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Occasion",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Season",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Trend",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Fit",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Bundles",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Max Sale Quantity",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Lining",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Fragile",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Liquid",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Hazardous",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            }
        ]
    },
    {
        'category': 'Fashion',
        'subCategory': 'Lingerie Sets & Accessories',
        'attributes': [
            {
                "name": "Gender",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Colour",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Size",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input",
            },
            {
                "name": "Brand",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Size Chart",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Fabric",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Colour Name",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Care Instructions",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Wash Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Weight",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Breadth",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Height",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Features",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Fabric Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Material",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Material Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Pattern",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Occasion",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Season",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Trend",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Fit",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Bundles",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Max Sale Quantity",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Lining",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Fragile",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Liquid",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Hazardous",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Coverage",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Padding",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            }
        ]
    },
    {
        'category': 'Fashion',
        'subCategory': 'Bath Robes',
        'attributes': [
            {
                "name": "Gender",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Colour",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Size",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input",
            },
            {
                "name": "Brand",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Size Chart",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Fabric",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Colour Name",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Care Instructions",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Wash Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Weight",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Breadth",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Height",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Features",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Fabric Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Material",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Material Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Pattern",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Occasion",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Season",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Trend",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Fit",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Bundles",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Max Sale Quantity",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Lining",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Fragile",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Liquid",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Hazardous",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            }
        ]
    },
    {
        'category': 'Fashion',
        'subCategory': 'Towels',
        'attributes': [
            {
                "name": "Gender",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Colour",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Size",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input",
            },
            {
                "name": "Brand",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Colour Name",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Care Instructions",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Wash Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Weight",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Breadth",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Height",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Features",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Material",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Material Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Pattern",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Occasion",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Season",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Trend",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Bundles",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Max Sale Quantity",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Fragile",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Liquid",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Hazardous",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            }
        ]
    },
    {
        'category': 'Fashion',
        'subCategory': 'Pyjamas',
        'attributes': [
            {
                "name": "Gender",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Colour",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Size",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input",
            },
            {
                "name": "Brand",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Size Chart",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Fabric",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Colour Name",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Care Instructions",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Wash Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Weight",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Breadth",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Height",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Features",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Fabric Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Material",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Material Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Pattern",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Occasion",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Season",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Trend",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Fit",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Bundles",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Max Sale Quantity",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Lining",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Num Pockets",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Fragile",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Liquid",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Hazardous",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            }
        ]
    },
    {
        'category': 'Fashion',
        'subCategory': 'Party Wear',
        'attributes': [
            {
                "name": "Gender",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Colour",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Size",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input",
            },
            {
                "name": "Brand",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Size Chart",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Fabric",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Colour Name",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Care Instructions",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Wash Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Weight",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Breadth",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Height",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Features",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Fabric Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Material",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Material Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Pattern",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Occasion",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Season",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Trend",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Fit",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Collar",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Neck",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Bundles",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Max Sale Quantity",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Num Pockets",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Sleeve Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Fragile",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Liquid",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Hazardous",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Ornamentation",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            }
        ]
    },
    {
        'category': 'Fashion',
        'subCategory': 'Innerwear & Sleepwear',
        'attributes': [
            {
                "name": "Gender",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Colour",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Size",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input",
            },
            {
                "name": "Brand",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Size Chart",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Fabric",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Colour Name",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Care Instructions",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Wash Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Weight",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Breadth",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Height",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Features",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Fabric Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Material",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Material Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Pattern",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Occasion",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Season",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Trend",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Fit",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Collar",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Neck",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Bundles",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Max Sale Quantity",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Num Pockets",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Sleeve Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Fragile",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Liquid",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Hazardous",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Closure Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Strap Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Coverage",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Padding",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Seam",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Waist Band",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            }
        ]
    },
    {
        'category': 'Fashion',
        'subCategory': 'Nightwear & Loungewear',
        'attributes': [
            {
                "name": "Gender",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Colour",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Size",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input",
            },
            {
                "name": "Brand",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Size Chart",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Fabric",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Colour Name",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Care Instructions",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Wash Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Weight",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Breadth",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Height",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Features",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Fabric Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Material",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Material Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Pattern",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Occasion",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Season",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Trend",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Fit",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Collar",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Neck",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Bundles",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Max Sale Quantity",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Num Pockets",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Sleeve Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Fragile",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Liquid",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Hazardous",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            }
        ]
    },
    {
        'category': 'Fashion',
        'subCategory': 'Watches',
        'attributes': [
            {
                "name": "Gender",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Colour",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Size",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input",
            },
            {
                "name": "Brand",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Strap Material",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Water Resistant",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Display",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Glass Material",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Colour Name",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Care Instructions",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Weight",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Breadth",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Height",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Features",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Material Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Pattern",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Occasion",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Season",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Trend",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Bundles",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Max Sale Quantity",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Fragile",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Liquid",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Hazardous",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Power Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Battery Life",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Bluetooth",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Call Function",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Heart Rate Monitor",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Pedometer",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Sleep Monitor",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "SPO2 Monitor",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Warranty",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Buckle Material",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Buckle Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Dial Shape",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            }
        ]
    },
    {
        'category': 'Fashion',
        'subCategory': 'Gloves',
        'attributes': [
            {
                "name": "Gender",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Colour",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Size",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input",
            },
            {
                "name": "Brand",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Colour Name",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Care Instructions",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Weight",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Breadth",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Height",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Features",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Material",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Material Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Pattern",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Occasion",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Season",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Trend",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Bundles",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Max Sale Quantity",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Fragile",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Liquid",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Hazardous",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            }
        ]
    },
    {
        'category': 'Fashion',
        'subCategory': 'Socks',
        'attributes': [
            {
                "name": "Gender",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Colour",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Size",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input",
            },
            {
                "name": "Brand",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Size Chart",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Fabric",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Colour Name",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Care Instructions",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Weight",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Breadth",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Height",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Features",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Fabric Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Material",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Material Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Pattern",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Occasion",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Season",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Trend",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Bundles",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Max Sale Quantity",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Fragile",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Liquid",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Hazardous",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Socks Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            }
        ]
    },
    {
        'category': 'Fashion',
        'subCategory': 'Stockings',
        'attributes': [
            {
                "name": "Gender",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Colour",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Size",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input",
            },
            {
                "name": "Brand",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Fabric",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Colour Name",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Care Instructions",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Weight",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Breadth",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Height",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Features",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Fabric Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Material",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Material Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Pattern",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Occasion",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Season",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Trend",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Bundles",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Max Sale Quantity",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Fragile",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Liquid",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Hazardous",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            }
        ]
    },
    {
        'category': 'Fashion',
        'subCategory': 'Laces',
        'attributes': [
            {
                "name": "Gender",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Colour",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Size",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input",
            },
            {
                "name": "Brand",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Fabric",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Colour Name",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Care Instructions",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Weight",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Breadth",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Height",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Features",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Fabric Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Material",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Material Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Pattern",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Occasion",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Season",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Trend",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Bundles",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Max Sale Quantity",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Fragile",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Liquid",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Hazardous",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            }
        ]
    },
    {
        'category': 'Fashion',
        'subCategory': 'Soles & Charms',
        'attributes': [
            {
                "name": "Gender",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Colour",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Size",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input",
            },
            {
                "name": "Brand",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Colour Name",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Care Instructions",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Weight",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Breadth",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Height",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Features",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Material",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Material Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Pattern",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Occasion",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Season",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Trend",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Bundles",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Max Sale Quantity",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Fragile",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Liquid",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Hazardous",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            }
        ]
    },
    {
        'category': 'Fashion',
        'subCategory': 'Shoe Racks & Organisers',
        'attributes': [
            {
                "name": "Gender",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Colour",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Size",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input",
            },
            {
                "name": "Brand",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Colour Name",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Care Instructions",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Weight",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Breadth",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Height",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Features",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Material",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Material Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Pattern",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Occasion",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Season",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Trend",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Bundles",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Max Sale Quantity",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Fragile",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Liquid",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Hazardous",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            }
        ]
    },
    {
        'category': 'Fashion',
        'subCategory': 'Shoe Care - Accessories',
        'attributes': [
            {
                "name": "Gender",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Colour",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Size",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input",
            },
            {
                "name": "Brand",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Colour Name",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Care Instructions",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Weight",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Breadth",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Height",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Features",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Material",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Material Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Pattern",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Occasion",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Season",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Trend",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Bundles",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Max Sale Quantity",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Fragile",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Liquid",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Hazardous",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            }
        ]
    },
    {
        'category': 'Fashion',
        'subCategory': 'Flip-Flops & Flats',
        'attributes': [
            {
                "name": "Gender",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Colour",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Size",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input",
            },
            {
                "name": "Brand",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Size Chart",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Fabric",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Colour Name",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Care Instructions",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Weight",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Breadth",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Height",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Features",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Fabric Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Material",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Material Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Pattern",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Occasion",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Season",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Trend",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Bundles",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Max Sale Quantity",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Fragile",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Liquid",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Hazardous",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Footwear Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Insole",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Sole Material",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Toe Shape",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Outsole",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Fasten Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Midsole",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            }
        ]
    },
    {
        'category': 'Fashion',
        'subCategory': 'Sandals & Floaters',
        'attributes': [
            {
                "name": "Gender",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Colour",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Size",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input",
            },
            {
                "name": "Brand",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Size Chart",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Fabric",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Colour Name",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Care Instructions",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Weight",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Breadth",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Height",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Features",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Fabric Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Material",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Material Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Pattern",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Occasion",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Season",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Trend",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Bundles",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Max Sale Quantity",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Fragile",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Liquid",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Hazardous",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Footwear Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Insole",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Sole Material",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Toe Shape",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Outsole",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Fasten Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Midsole",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            }
        ]
    },
    {
        'category': 'Fashion',
        'subCategory': 'Backpacks',
        'attributes': [
            {
                "name": "Gender",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Colour",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Size",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input",
            },
            {
                "name": "Brand",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Fabric",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Water Resistant",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Colour Name",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Care Instructions",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Weight",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Breadth",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Height",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Features",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Fabric Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Material",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Material Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Pattern",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Occasion",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Season",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Trend",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Bundles",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Max Sale Quantity",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Lining",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Num Pockets",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Fragile",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Liquid",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Hazardous",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Backpack Style",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Closure Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Laptop Compartment",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Strap Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Volume",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Lock Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            }
        ]
    },
    {
        'category': 'Fashion',
        'subCategory': 'Handbags',
        'attributes': [
            {
                "name": "Gender",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Colour",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Size",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input",
            },
            {
                "name": "Brand",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Water Resistant",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Colour Name",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Care Instructions",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Weight",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Breadth",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Height",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Features",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Material",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Material Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Pattern",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Occasion",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Season",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Trend",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Bundles",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Max Sale Quantity",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Lining",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Num Pockets",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Fragile",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Liquid",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Hazardous",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Closure Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Laptop Compartment",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Strap Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Volume",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Lock Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Sustainability",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Handcrafted",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Craftmark",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            }
        ]
    },
    {
        'category': 'Fashion',
        'subCategory': 'Trolley, Luggage & Suitcases',
        'attributes': [
            {
                "name": "Gender",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Colour",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Size",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input",
            },
            {
                "name": "Brand",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Fabric",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Water Resistant",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Colour Name",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Care Instructions",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Weight",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Breadth",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Height",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Features",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Fabric Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Material",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Material Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Pattern",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Occasion",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Season",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Trend",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Bundles",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Max Sale Quantity",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Lining",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Num Pockets",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Fragile",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Liquid",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Hazardous",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Closure Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Laptop Compartment",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Strap Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Volume",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Lock Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            }
        ]
    },
    {
        'category': 'Fashion',
        'subCategory': 'Formal Shoes',
        'attributes': [
            {
                "name": "Gender",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Colour",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Size",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input",
            },
            {
                "name": "Brand",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Size Chart",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Fabric",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Colour Name",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Care Instructions",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Weight",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Breadth",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Height",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Features",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Fabric Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Material",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Material Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Pattern",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Occasion",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Season",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Trend",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Bundles",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Max Sale Quantity",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Fragile",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Liquid",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Hazardous",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Footwear Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Insole",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Sole Material",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Toe Shape",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Outsole",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Fasten Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Midsole",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            }
        ]
    },
    {
        'category': 'Fashion',
        'subCategory': 'Casual Shoes',
        'attributes': [
            {
                "name": "Gender",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Colour",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Size",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input",
            },
            {
                "name": "Brand",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Size Chart",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Fabric",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Colour Name",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Care Instructions",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Weight",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Breadth",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Height",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Features",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Fabric Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Material",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Material Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Pattern",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Occasion",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Season",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Trend",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Bundles",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Max Sale Quantity",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Fragile",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Liquid",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Hazardous",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Footwear Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Insole",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Sole Material",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Toe Shape",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Outsole",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Fasten Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Midsole",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            }
        ]
    },
    {
        'category': 'Fashion',
        'subCategory': 'Sports Shoes',
        'attributes': [
            {
                "name": "Gender",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Colour",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Size",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input",
            },
            {
                "name": "Brand",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Size Chart",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Fabric",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Colour Name",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Sport Type",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Care Instructions",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Weight",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Breadth",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Height",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Features",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Fabric Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Material",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Material Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Pattern",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Occasion",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Season",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Trend",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Bundles",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Max Sale Quantity",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Fragile",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Liquid",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Hazardous",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Footwear Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Insole",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Sole Material",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Toe Shape",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Outsole",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Fasten Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Midsole",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            }
        ]
    },
    {
        'category': 'Fashion',
        'subCategory': 'Outdoor Shoes',
        'attributes': [
            {
                "name": "Gender",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Colour",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Size",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input",
            },
            {
                "name": "Brand",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Size Chart",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Colour Name",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Care Instructions",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Weight",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Breadth",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Height",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Features",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Material",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Material Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Pattern",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Occasion",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Season",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Trend",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Bundles",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Max Sale Quantity",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Fragile",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Liquid",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Hazardous",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Footwear Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Insole",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Sole Material",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Toe Shape",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Outsole",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Fasten Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Midsole",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            }
        ]
    },
    {
        'category': 'Fashion',
        'subCategory': 'Work & Safety Shoes',
        'attributes': [
            {
                "name": "Gender",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Colour",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Size",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input",
            },
            {
                "name": "Brand",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Size Chart",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Colour Name",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Care Instructions",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Weight",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Breadth",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Height",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Features",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Material",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Material Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Pattern",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Occasion",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Season",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Trend",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Bundles",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Max Sale Quantity",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Fragile",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Liquid",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Hazardous",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Footwear Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Insole",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Sole Material",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Toe Shape",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Outsole",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Fasten Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Midsole",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            }
        ]
    },
    {
        'category': 'Fashion',
        'subCategory': 'Ethnic Shoes',
        'attributes': [
            {
                "name": "Gender",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Colour",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Size",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input",
            },
            {
                "name": "Brand",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Size Chart",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Fabric",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Colour Name",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Care Instructions",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Weight",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Breadth",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Height",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Features",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Fabric Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Material",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Material Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Pattern",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Occasion",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Season",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Trend",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Bundles",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Max Sale Quantity",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Fragile",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Liquid",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Hazardous",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Footwear Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Insole",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Sole Material",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Toe Shape",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Outsole",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Fasten Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Midsole",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            }
        ]
    },
    {
        'category': 'Fashion',
        'subCategory': 'Boots',
        'attributes': [
            {
                "name": "Gender",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Colour",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Size",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input",
            },
            {
                "name": "Brand",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Size Chart",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Colour Name",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Care Instructions",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Weight",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Breadth",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Height",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Features",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Material",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Material Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Pattern",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Occasion",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Season",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Trend",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Bundles",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Max Sale Quantity",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Fragile",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Liquid",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Hazardous",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Footwear Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Insole",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Sole Material",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Toe Shape",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Outsole",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Fasten Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Midsole",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            }
        ]
    },
    {
        'category': 'Fashion',
        'subCategory': 'Heels',
        'attributes': [
            {
                "name": "Gender",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Colour",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Size",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input",
            },
            {
                "name": "Brand",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Size Chart",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Fabric",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Colour Name",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Care Instructions",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Weight",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Breadth",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Height",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Features",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Fabric Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Material",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Material Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Pattern",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Occasion",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Season",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Trend",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Bundles",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Max Sale Quantity",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Fragile",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Liquid",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Hazardous",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Footwear Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Insole",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Sole Material",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Toe Shape",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Outsole",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Fasten Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Midsole",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            }
        ]
    },
    {
        'category': 'Fashion',
        'subCategory': 'Contact Lenses',
        'attributes': [
            {
                "name": "Gender",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Colour",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Size",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input",
            },
            {
                "name": "Brand",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Colour Name",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Care Instructions",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Weight",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Breadth",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Height",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Features",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Material",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Material Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Pattern",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Occasion",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Season",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Trend",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Bundles",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Max Sale Quantity",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Fragile",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Liquid",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Hazardous",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Lens Material",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Lens Colour",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            }
        ]
    },
    {
        'category': 'Fashion',
        'subCategory': 'Eye Glasses',
        'attributes': [
            {
                "name": "Gender",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Colour",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Size",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input",
            },
            {
                "name": "Brand",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Colour Name",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Care Instructions",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Weight",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Breadth",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Height",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Features",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Material Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Pattern",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Occasion",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Season",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Trend",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Bundles",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Max Sale Quantity",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Fragile",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Liquid",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Hazardous",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Frame Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Frame Shape",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Frame Colour",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Frame Size",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Frame Material",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Frame Style",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Face Shape",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Lens Material",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Lens Colour",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            }
        ]
    },
    {
        'category': 'Fashion',
        'subCategory': 'Eye Glass Frames',
        'attributes': [
            {
                "name": "Gender",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Colour",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Size",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input",
            },
            {
                "name": "Brand",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Colour Name",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Care Instructions",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Weight",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Breadth",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Height",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Features",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Material Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Pattern",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Occasion",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Season",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Trend",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Bundles",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Max Sale Quantity",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Fragile",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Liquid",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Hazardous",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Frame Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Frame Shape",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Frame Colour",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Frame Size",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Frame Material",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Frame Style",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Face Shape",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Lens Material",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Lens Colour",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            }
        ]
    },
    {
        'category': 'Fashion',
        'subCategory': 'Sunglasses',
        'attributes': [
            {
                "name": "Gender",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Colour",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Size",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input",
            },
            {
                "name": "Brand",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Colour Name",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Care Instructions",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Weight",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Breadth",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Height",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Features",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Material Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Pattern",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Occasion",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Season",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Trend",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Bundles",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Max Sale Quantity",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Fragile",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Liquid",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Hazardous",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Frame Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Frame Shape",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Frame Colour",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Frame Size",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Frame Material",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Frame Style",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Face Shape",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Lens Material",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Lens Colour",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            }
        ]
    },
    {
        'category': 'Fashion',
        'subCategory': 'Contact Lens Cases',
        'attributes': [
            {
                "name": "Gender",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Colour",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Size",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input",
            },
            {
                "name": "Brand",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Colour Name",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Care Instructions",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Weight",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Breadth",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Height",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Features",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Material Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Pattern",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Occasion",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Season",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Trend",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Bundles",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Max Sale Quantity",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Fragile",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Liquid",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Hazardous",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            }
        ]
    },
    {
        'category': 'Fashion',
        'subCategory': 'Contact Lens Solutions',
        'attributes': [
            {
                "name": "Gender",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Colour",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Size",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input",
            },
            {
                "name": "Brand",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Colour Name",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Care Instructions",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Weight",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Breadth",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Height",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Features",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Material Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Pattern",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Occasion",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Season",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Trend",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Bundles",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Max Sale Quantity",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Fragile",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Liquid",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Hazardous",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            }
        ]
    },
    {
        'category': 'Fashion',
        'subCategory': 'Contact Lens Tweezers',
        'attributes': [
            {
                "name": "Gender",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Colour",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Size",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input",
            },
            {
                "name": "Brand",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Colour Name",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Care Instructions",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Weight",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Breadth",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Height",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Features",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Material",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Material Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Pattern",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Occasion",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Season",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Trend",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Bundles",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Max Sale Quantity",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Fragile",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Liquid",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Hazardous",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            }
        ]
    },
    {
        'category': 'Fashion',
        'subCategory': 'Eyeglasses Pouches & Cases',
        'attributes': [
            {
                "name": "Gender",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Colour",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Size",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input",
            },
            {
                "name": "Brand",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Colour Name",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Care Instructions",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Weight",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Breadth",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Height",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Features",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Material",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Material Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Pattern",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Occasion",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Season",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Trend",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Bundles",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Max Sale Quantity",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Fragile",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Liquid",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Hazardous",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            }
        ]
    },
    {
        'category': 'Fashion',
        'subCategory': 'Microfiber Wipes',
        'attributes': [
            {
                "name": "Gender",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Colour",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Size",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input",
            },
            {
                "name": "Brand",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Colour Name",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Care Instructions",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Weight",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Breadth",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Height",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Features",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Material",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Material Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Pattern",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Occasion",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Season",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Trend",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Bundles",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Max Sale Quantity",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Fragile",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Liquid",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Hazardous",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            }
        ]
    },
    {
        'category': 'Fashion',
        'subCategory': 'Eyewear Slings',
        'attributes': [
            {
                "name": "Gender",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Colour",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Size",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input",
            },
            {
                "name": "Brand",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Colour Name",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Care Instructions",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Weight",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Breadth",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Height",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Features",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Material",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Material Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Pattern",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Occasion",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Season",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Trend",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Bundles",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Max Sale Quantity",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Fragile",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Liquid",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Hazardous",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            }
        ]
    },
    {
        'category': 'Fashion',
        'subCategory': 'Bracelets',
        'attributes': [
            {
                "name": "Gender",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Colour",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Size",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input",
            },
            {
                "name": "Brand",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Colour Name",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Base Metal",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Plating",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Care Instructions",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Weight",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Breadth",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Height",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Features",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Material",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Material Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Pattern",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Occasion",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Season",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Trend",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Bundles",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Max Sale Quantity",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Fragile",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Liquid",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Hazardous",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Closure Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Stone Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Gem Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Sustainability",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Handcrafted",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Craftmark",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            }
        ]
    },
    {
        'category': 'Fashion',
        'subCategory': 'Chains',
        'attributes': [
            {
                "name": "Gender",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Colour",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Size",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input",
            },
            {
                "name": "Brand",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Colour Name",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Base Metal",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Plating",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Care Instructions",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Weight",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Breadth",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Height",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Features",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Material",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Material Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Pattern",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Occasion",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Season",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Trend",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Bundles",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Max Sale Quantity",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Fragile",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Liquid",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Hazardous",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Closure Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Stone Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Gem Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Sustainability",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Handcrafted",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Craftmark",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            }
        ]
    },
    {
        'category': 'Fashion',
        'subCategory': 'Mangalsutra',
        'attributes': [
            {
                "name": "Gender",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Colour",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Size",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input",
            },
            {
                "name": "Brand",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Colour Name",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Base Metal",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Plating",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Care Instructions",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Weight",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Breadth",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Height",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Features",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Material",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Material Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Pattern",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Occasion",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Season",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Trend",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Bundles",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Max Sale Quantity",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Fragile",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Liquid",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Hazardous",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Closure Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Stone Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Gem Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Sustainability",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Handcrafted",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Craftmark",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            }
        ]
    },
    {
        'category': 'Fashion',
        'subCategory': 'Anklets',
        'attributes': [
            {
                "name": "Gender",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Colour",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Size",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input",
            },
            {
                "name": "Brand",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Colour Name",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Base Metal",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Plating",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Care Instructions",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Weight",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Breadth",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Height",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Features",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Material",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Material Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Pattern",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Occasion",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Season",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Trend",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Bundles",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Max Sale Quantity",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Fragile",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Liquid",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Hazardous",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Closure Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Stone Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Gem Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Sustainability",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Handcrafted",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Craftmark",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            }
        ]
    },
    {
        'category': 'Fashion',
        'subCategory': 'Bangles & Bracelets',
        'attributes': [
            {
                "name": "Gender",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Colour",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Size",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input",
            },
            {
                "name": "Brand",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Colour Name",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Base Metal",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Plating",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Care Instructions",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Weight",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Breadth",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Height",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Features",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Material",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Material Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Pattern",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Occasion",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Season",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Trend",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Bundles",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Max Sale Quantity",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Fragile",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Liquid",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Hazardous",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Closure Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Stone Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Gem Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Sustainability",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Handcrafted",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Craftmark",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            }
        ]
    },
    {
        'category': 'Fashion',
        'subCategory': 'Necklaces',
        'attributes': [
            {
                "name": "Gender",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Colour",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Size",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input",
            },
            {
                "name": "Brand",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Colour Name",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Base Metal",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Plating",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Care Instructions",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Weight",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Breadth",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Height",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Features",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Material",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Material Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Pattern",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Occasion",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Season",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Trend",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Bundles",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Max Sale Quantity",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Fragile",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Liquid",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Hazardous",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Closure Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Stone Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Gem Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Sustainability",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Handcrafted",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Craftmark",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            }
        ]
    },
    {
        'category': 'Fashion',
        'subCategory': 'Earrings',
        'attributes': [
            {
                "name": "Gender",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Colour",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Size",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input",
            },
            {
                "name": "Brand",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Colour Name",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Base Metal",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Plating",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Care Instructions",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Weight",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Breadth",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Height",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Features",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Material",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Material Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Pattern",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Occasion",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Season",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Trend",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Bundles",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Max Sale Quantity",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Fragile",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Liquid",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Hazardous",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Closure Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Stone Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Gem Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Sustainability",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Handcrafted",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Craftmark",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            }
        ]
    },
    {
        'category': 'Fashion',
        'subCategory': 'Jewellery Sets',
        'attributes': [
            {
                "name": "Gender",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Colour",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Size",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input",
            },
            {
                "name": "Brand",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Colour Name",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Base Metal",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Plating",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Care Instructions",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Weight",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Breadth",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Height",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Features",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Material",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Material Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Pattern",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Occasion",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Season",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Trend",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Bundles",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Max Sale Quantity",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Fragile",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Liquid",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Hazardous",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Closure Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Stone Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Gem Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Sustainability",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Handcrafted",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Craftmark",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            }
        ]
    },
    {
        'category': 'Fashion',
        'subCategory': 'Nosepins & Noserings',
        'attributes': [
            {
                "name": "Gender",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Colour",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Size",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input",
            },
            {
                "name": "Brand",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Colour Name",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Base Metal",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Plating",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Care Instructions",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Weight",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Breadth",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Height",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Features",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Material",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Material Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Pattern",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Occasion",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Season",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Trend",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Bundles",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Max Sale Quantity",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Fragile",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Liquid",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Hazardous",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Closure Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Stone Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Gem Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Sustainability",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Handcrafted",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Craftmark",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            }
        ]
    },
    {
        'category': 'Fashion',
        'subCategory': 'Pendants',
        'attributes': [
            {
                "name": "Gender",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Colour",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Size",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input",
            },
            {
                "name": "Brand",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Colour Name",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Base Metal",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Plating",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Care Instructions",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Weight",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Breadth",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Height",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Features",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Material",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Material Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Pattern",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Occasion",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Season",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Trend",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Bundles",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Max Sale Quantity",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Fragile",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Liquid",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Hazardous",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Closure Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Stone Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Gem Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Sustainability",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Handcrafted",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Craftmark",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            }
        ]
    },
    {
        'category': 'Fashion',
        'subCategory': 'Rings',
        'attributes': [
            {
                "name": "Gender",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Colour",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Size",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input",
            },
            {
                "name": "Brand",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Colour Name",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Base Metal",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Plating",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Care Instructions",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Weight",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Breadth",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Height",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Features",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Material",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Material Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Pattern",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Occasion",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Season",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Trend",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Bundles",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Max Sale Quantity",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Fragile",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Liquid",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Hazardous",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Closure Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Stone Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Gem Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Sustainability",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Handcrafted",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Craftmark",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            }
        ]
    },
    {
        'category': 'Fashion',
        'subCategory': 'Toe Rings',
        'attributes': [
            {
                "name": "Gender",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Colour",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Size",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input",
            },
            {
                "name": "Brand",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Colour Name",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Base Metal",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Plating",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Care Instructions",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Weight",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Breadth",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Height",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Features",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Material",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Material Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Pattern",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Occasion",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Season",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Trend",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Bundles",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Max Sale Quantity",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Fragile",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Liquid",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Hazardous",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Closure Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Stone Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Gem Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Sustainability",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Handcrafted",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Craftmark",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            }
        ]
    },
    {
        'category': 'Fashion',
        'subCategory': 'Gold Coins',
        'attributes': [
            {
                "name": "Gender",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Colour",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Size",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input",
            },
            {
                "name": "Brand",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Colour Name",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Base Metal",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Plating",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Care Instructions",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Weight",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Breadth",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Height",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Features",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Material",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Material Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Pattern",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Occasion",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Season",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Trend",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Bundles",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Max Sale Quantity",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Fragile",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Liquid",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Hazardous",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Closure Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Stone Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Gem Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Sustainability",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Handcrafted",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Craftmark",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            }
        ]
    },
    {
        'category': 'Fashion',
        'subCategory': 'Brooch',
        'attributes': [
            {
                "name": "Gender",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Colour",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Size",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input",
            },
            {
                "name": "Brand",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Colour Name",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Base Metal",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Plating",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Care Instructions",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Weight",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Breadth",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Height",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Features",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Material",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Material Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Pattern",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Occasion",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Season",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Trend",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Bundles",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Max Sale Quantity",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Fragile",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Liquid",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Hazardous",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Closure Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Stone Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Gem Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
            },
            {
                "name": "Sustainability",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Handcrafted",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Craftmark",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            }
        ]
    },
    {
        'category': 'Appliances',
        'subCategory': 'Audio',
        'attributes': []
    },
    {
        'category': 'Appliances',
        'subCategory': 'Camera and Camcorder',
        'attributes': []
    },
    {
        'category': 'Appliances',
        'subCategory': 'Safety Security',
        'attributes': []
    },
    {
        'category': 'Appliances',
        'subCategory': 'Speaker',
        'attributes': []
    },
    {
        'category': 'Appliances',
        'subCategory': 'Television',
        'attributes': []
    },
    {
        'category': 'Appliances',
        'subCategory': 'Video',
        'attributes': []
    },
    {
        'category': 'Appliances',
        'subCategory': 'Air Conditioning and Air Cleaners',
        'attributes': []
    },
    {
        'category': 'Appliances',
        'subCategory': 'Health, Home and Personal Care',
        'attributes': []
    },
    {
        'category': 'Appliances',
        'subCategory': 'Heaters',
        'attributes': []
    },
    {
        'category': 'Appliances',
        'subCategory': 'Kitchen Appliances',
        'attributes': []
    },
    {
        'category': 'Appliances',
        'subCategory': 'Lighting & Electric Fans',
        'attributes': []
    },
    {
        'category': 'Appliances',
        'subCategory': 'Refrigerators and Freezers',
        'attributes': []
    },
    {
        'category': 'Appliances',
        'subCategory': 'Vacuum Cleaners',
        'attributes': []
    },
    {
        'category': 'Appliances',
        'subCategory': 'Washing Machines and Accessories',
        'attributes': []
    },
    {
        'category': 'Appliances',
        'subCategory': 'Water Purifiers and Coolers',
        'attributes': []
    },
    {
        'category': 'Appliances',
        'subCategory': 'Inverter & Stabilizer',
        'attributes': []
    }
];

module.exports = {
    Categories, SubCategories, Attributes
};











