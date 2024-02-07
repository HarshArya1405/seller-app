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
            { 'name': 'Brand', 'type': 'input', 'example': 'Apple', 'variationAllowed': false },
            { 'name': 'Color', 'type': 'select', 'example': 'Black', 'variationAllowed': true },
            { 'name': 'Model', 'type': 'input', 'example': 'MacBook Air', 'variationAllowed': false },
            { 'name': 'CPU', 'type': 'input', 'example': 'Core M family', 'variationAllowed': false },
            { 'name': 'cpu_mfr', 'type': 'input', 'example': 'Intel', 'variationAllowed': false },
        ]
    }, {
        'category': 'Electronics',
        'subCategory': 'Earphone',
        'attributes': [
            { 'name': 'Size', 'type': 'input', 'example': '', 'variationAllowed': true },
            { 'name': 'Edition', 'type': 'input', 'example': '', 'variationAllowed': true },
            { 'name': 'brand', 'type': 'input', 'example': 'Samsung', 'variationAllowed': false },
            { 'name': 'Color', 'type': 'select', 'example': 'Black', 'variationAllowed': true },
            { 'name': 'model', 'type': 'input', 'example': 'Galaxy Bean Buds Live', 'variationAllowed': false },
            { 'name': 'connectivity', 'type': 'input', 'example': 'wireless', 'variationAllowed': true },
            { 'name': 'form_factor', 'type': 'input', 'example': 'In Ear', 'variationAllowed': false },
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
            { 'name': 'Brand', 'type': 'input', 'example': 'Samsung', 'variationAllowed': false },
            { 'name': 'Color', 'type': 'select', 'example': 'Black', 'variationAllowed': true },
            { 'name': 'Model', 'type': 'input', 'example': 'Galaxy Bean Buds Live', 'variationAllowed': false },
            { 'name': 'Connectivity', 'type': 'input', 'example': 'wireless', 'variationAllowed': true },
            { 'name': 'Form Factor', 'type': 'input', 'example': 'In Ear', 'variationAllowed': false },

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
            { 'name': 'brand', 'type': 'input', 'example': 'Apple iPhone', 'variationAllowed': false },
            { 'name': 'size', 'type': 'input', 'example': '512GB', 'variationAllowed': true }
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
            { 'name': 'Brand', 'type': 'input', 'example': 'Boat', 'variationAllowed': false },
            { 'name': 'Color', 'type': 'select', 'example': 'Black', 'variationAllowed': true },
            { 'name': 'Model', 'type': 'input', 'example': 'Ultima Call Max', 'variationAllowed': false },
        ]
    }, {
        'category': 'Electronics',
        'subCategory': 'Speaker',
        'attributes': [
            { 'name': 'Brand', 'type': 'input', 'example': 'Apple iPhone', 'variationAllowed': false },
            { 'name': 'Color', 'type': 'select', 'example': 'Black', 'variationAllowed': true },
            { 'name': 'Size', 'type': 'input', 'example': '512GB', 'variationAllowed': true },
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
        'category': 'Home and Kitchen',
        'subCategory': 'Home and Kitchen',
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
        'category': 'Home and Kitchen',
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
        'category': 'Home and Kitchen',
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
        'category': 'Home and Kitchen',
        'subCategory': 'Garden and Outdoor Products',
        'attributes': [
            { 'name': 'Material Type', 'type': 'input', 'example': 'wood', 'variationAllowed': true },
            { 'name': 'Color', 'type': 'input', 'example': '', 'variationAllowed': true },
        ]
    },
    {
        'category': 'Home and Kitchen',
        'subCategory': 'Home Improvement',
        'attributes': [
            { 'name': 'Size', 'type': 'input', 'example': 'small', 'variationAllowed': true },
            { 'name': 'Style', 'type': 'input', 'example': 'modern', 'variationAllowed': true },
            { 'name': 'Number of Items', 'type': 'number', 'example': '6', 'variationAllowed': true },
            { 'name': 'Color', 'type': 'input', 'example': '', 'variationAllowed': true },
        ]
    },
    {
        'category': 'Home and Kitchen',
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
        'category': 'Home and Kitchen',
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











