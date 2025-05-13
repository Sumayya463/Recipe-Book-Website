
        const breakfast = document.getElementById('breakfast');
        breakfast.addEventListener('click', () => {
        window.open("./breakfast.html", "_self");
        });
        
        const lunch = document.getElementById('lunch');
        lunch.addEventListener('click', () => {
        window.open("./lunch.html", "_self");
        });
        
        
        const dinner = document.getElementById('dinner');
        dinner.addEventListener('click', () => {
        window.open("./dinner.html", "_self");
        });
        
        
    
        const errorContainer = document.getElementById('error-message');
        
        const recipeMap = {
            "shakshuka": 2,
            "chole bhature": 3,
            "croissant": 4,
            "scrambled eggs": 5,
            "rawa upma": 6,
            "spanish omelette": 7,
            "simit": 8,
            "bao buns": 9,
            "chicken porridge": 10,
            "dosa": 11,
            "fara": 12,
            "paya nihari": 13,
            "french toast": 14,
            "oatmeal": 15,
            "idli": 16,
            "rajma chawal": 17,
            "kimbap": 18,
            "frittata": 19,
            "falafel": 20,
            "club sandwich": 21,
            "chickpea salad": 22,
            "tuna wrap": 23,
            "dal makhani": 24,
            "kathi roll": 25,
            "tomato soup": 26,
            "tacos": 27,
            "dal tadka": 28,
            "fajitas": 29,
            "chicken soup": 30,
            "egg masala": 31,
            "paneer fried rice": 32,
            "chicken biryani": 33,
            "chicken kebab": 34,
            "lazagna": 35,
            "garlic shrimp": 36,
            "haleem": 37,
            "chicken pizza": 38,
            "alfredo pasta": 39,
            "crispy fried chicken": 40,
            "veg noodles": 41,
            "cream of chicken soup": 42,
            "butter chicken": 43,
            "paneer butter masala": 44,
            "mutton rogan josh": 45,
            "aloo gobi": 46,
            "veg pulao": 47,
            "sarson ka saag": 48
        };
        
        // Search logic
        const searchInput = document.getElementById('recipe-input');
        const searchBtn = document.getElementById('search-button');
        
        function handleSearch() {
            const query = searchInput.value.trim().toLowerCase();
            if(query === ''){
                alert("Search For a recipe!");
                errorContainer.textContent = ''; // Clear any previous error
                return; 
            }
            const recipeId = recipeMap[query];
        
            if (recipeId) {
                window.location.href = `recipe.html?id=${recipeId}`;
            
            }else{
                errorContainer.textContent = 'Recipe not found. Please try another recipe.';
        errorContainer.style.color = 'white';
        errorContainer.style.backgroundColor = 'black';

            }
            // Clear any previous error
            

         
        }
        errorContainer.textContent = ''; 
        // Click event
        searchBtn.addEventListener('click', handleSearch);
        
        // Enter key event
        searchInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                handleSearch();
            }
        });
        
        

      

    
       

   
    



