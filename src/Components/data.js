import React, { createContext, useState } from "react";
export const store = createContext();

const Data = (props) => {
    const text= 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).'

    const [data, setData] = useState([

        {
            id: "1",
            category: "Bollywood",
            date: "12/09/2022",
            title: "ROCKETRY",
            img: "https://m.media-amazon.com/images/M/MV5BYTk1MzRlMDYtMmVjYy00NTkyLTkxNDctZmZmZTllOTRhM2Q1XkEyXkFqcGdeQXVyMjUyMDI0MzQ@._V1_.jpg",
            description: "Based on the life of Indian Space Research Organization scientist Nambi Narayanan, who was framed for being a spy and arrested in 1994. Though free, he continues to fight for justice against the officials who falsely implicated him",
            imdb: "IMDB - 4/5",
            release: "Release Date - 09/05/2021",
            details: "Rocketry: The Nambi Effect is a 2022 Indian biographical drama film written, produced and directed by R. Madhavan in his directorial debut. The film is based on the life of Nambi Narayanan, played by Madhavan, a scientist at the Indian Space Research Organisation, who was accused in the ISRO espionage case and later exonerated. The story spans across Narayanan's days as a graduate student at Princeton University, before exploring his work as a scientist and the false espionage charges placed upon him. After its official announcement in October 2018, principal photography took place across several countries including India, Russia and France. The cinematography and editing were handled by Sirsha Ray and Bijith Bala, respectively, while the original score is composed by Sam C. S. Rocketry was filmed simultaneously in the English, Hindi and Tamil languages. Rocketry premiered at the 2022 Cannes Film Festival on 19 May, and was theatrically released in India on 1 July 2022. The film opened to mostly positive reviews from critics, who praised Madhavan's performance, his screenplay and his noble intention to make the film. Made for ₹25 crore, Rocketry has grossed ₹50 crore worldwide."
        },

        {
            id: "2",
            category: "Bollywood",
            date: "12/09/2022",
            title: "777 CHARLIE",
            img: "https://m.media-amazon.com/images/M/MV5BMDE1YjJmMGEtYWI5YS00YjI1LTljMDMtOTVkNzdiMjc1NmI4XkEyXkFqcGdeQXVyODk4NTI4NDA@._V1_.jpg",
            description: "Dharma is stuck in a rut with his negative and lonely lifestyle and spends each day in the comfort of his loneliness. A pup named Charlie enters his life and gives him a new perspective towards it.",
            imdb: "IMDB - 4/5",
            release: "Release Date - 09/05/2021",
            details: text
        },
        {
            id: "3",
            category: "Bollywood",
            date: "12/09/2022",
            title: "AGENT SAI",
            img: "https://m.media-amazon.com/images/M/MV5BNjMzYWJkNmMtZDhmZC00ZmViLTljNGUtZjZkYWRmZmQ3MjM5XkEyXkFqcGdeQXVyMTE1MTYxMzk2._V1_.jpg",
            description: "Agent Sai Srinivasa Athreya is an authentic humorous investigative thriller revolving around the adventures of a detective based out of Nellore.",
            imdb: "IMDB - 4/5",
            release: "Release Date - 09/05/2021",
            details: text
        },
        {
            id: "4",
            category: "Bollywood",
            date: "12/09/2022",
            title: "RAATCHASAN",
            img: "https://m.media-amazon.com/images/M/MV5BNjMwMjg2YzItNWRiOC00YTkzLWI5MjAtZjU5YTE2MmU1NzllXkEyXkFqcGdeQXVyMzYxOTQ3MDg@._V1_.jpg",
            description: "A sub-inspector sets out in pursuit of a mysterious serial killer who targets teen school girls and murders them brutally",
            imdb: "IMDB - 4/5",
            release: "Release Date - 09/05/2021",
            details: text
        },
        {
            id: "5",
            category: "Bollywood",
            date: "12/09/2022",
            title: "SHIDDAT",
            img: "https://pbs.twimg.com/media/FAmMOUSVgAAaSuc.jpg",
            description: "A passionate love story involving two couples which highlights the contrast between a regular, mature yet egoistic husband and a unique, happy go lucky, enamored, overzealous boy chasing after the love of his life.",
            imdb: "IMDB - 4/5",
            release: "Release Date - 09/05/2021",
            details: text
        },
        {
            id: "6",
            category: "Bollywood",
            date: "12/09/2022",
            title: "BADLA",
            img: "https://m.media-amazon.com/images/M/MV5BYjZiMzIzYTctNDViZi00OWNmLWFmN2YtMmI2OWJiZWViMmY3XkEyXkFqcGdeQXVyNTYwMzA0MTM@._V1_.jpg",
            description: "A dynamic young entrepreneur finds herself locked in a hotel room with the corpse of her dead lover. She hires a prestigious lawyer to defend her and they work together to figure out what actually happened.",
            imdb: "IMDB - 4/5",
            release: "Release Date - 09/05/2021",
            details: text
        },
        {
            id: "7",
            category: "Bollywood",
            date: "12/09/2022",
            title: "GEETHA GOVINDAM",
            img: "https://m.media-amazon.com/images/M/MV5BZDc2NDNjZjUtODhlOS00YmNiLTkzNzUtNGYyMzE3YjhiZjgxXkEyXkFqcGdeQXVyMTA4NjE0NjEy._V1_.jpg",
            description: "An innocent young lecturer is misunderstood as a pervert and despised by a woman who co-incidentally turns out to be the younger sister of his brother-in-law. Eventually differences subside and love blooms between them.",
            imdb: "IMDB - 4/5",
            release: "Release Date - 09/05/2021",
            details: text
        },
        {
            id: "8",
            category: "Bollywood",
            date: "12/09/2022",
            title: "MASTER",
            img: "https://m.media-amazon.com/images/M/MV5BOTRkYWY3ZGEtYzU5My00ZGY4LThhYjEtNTYyNzFhMDM4MTUyXkEyXkFqcGdeQXVyMTA3MDk2NDg2._V1_.jpg",
            description: "An alcoholic professor is sent to a juvenile school, where he clashes with a gangster who uses the school children for criminal activities.",
            imdb: "IMDB - 4/5",
            release: "Release Date - 09/05/2021",
            details: text
        },
        {
            id: "9",
            category: "Bollywood",
            date: "12/09/2022",
            title: "KGF",
            img: "https://cdn.celpox.com/bby_uploads/media/ccb32e97876a58bbc8597d93a67f0b75.jpg",
            description: "In the 1970s, a gangster goes undercover as a slave to assassinate the owner of a notorious gold mine.",
            imdb: "IMDB - 4/5",
            release: "Release Date - 09/05/2021",
            details: text
        },
        {
            id: "10",
            category: "Bollywood",
            date: "12/09/2022",
            title: "SITA RAMAM",
            img: "https://m.media-amazon.com/images/M/MV5BN2RjZDJhYzUtOTQ5Yy00OWM3LWE5OTctM2Y0YWVmNzAzODllXkEyXkFqcGdeQXVyMTA3MDk2NDg2._V1_.jpg",
            description: "An orphan soldier, Lieutenant Ram's life changes, after he gets a letter from a girl named Sita. He meets her and love blossoms between them. When he comes back to his camp in Kashmir,After he gets caught in jail, he sends a letter to Sita which won't reach her.",
            imdb: "IMDB -4/5",
            release: "Release Date - 09/05/2021",
            details: text
        },

        {
            id: "11",
            category: "Hollywood",
            date: "12/09/2022",
            title: "INCEPTION",
            img: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_FMjpg_UX1000_.jpg",
            description: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O., but his tragic past may doom the project and his team to disaster.",
            imdb: "IMDB - 4/5",
            release: "Release Date - 09/05/2021",
            details: "Inception is a 2010 science fiction action film[4][5][6] written and directed by Christopher Nolan, who also produced the film with Emma Thomas, his wife. The film stars Leonardo DiCaprio as a professional thief who steals information by infiltrating the subconscious of his targets. He is offered a chance to have his criminal history erased as payment for the implantation of another person's idea into a target's subconscious.[7] The ensemble cast includes Ken Watanabe, Joseph Gordon-Levitt, Marion Cotillard, Elliot Page,[a] Tom Hardy, Dileep Rao, Cillian Murphy, Tom Berenger, and Michael Caine.After the 2002 completion of Insomnia, Nolan presented to Warner Bros. a written 80-page treatment for a horror film envisioning dream stealers, based on lucid dreaming.[8] Deciding he needed more experience before tackling a production of this magnitude and complexity, Nolan shelved the project and instead worked on 2005's Batman Begins, 2006's The Prestige, and The Dark Knight in 2008.[9] The treatment was revised over 6 months and was purchased by Warner in February 2009.[10] Inception was filmed in six countries, beginning in Tokyo on June 19 and ending in Canada on November 22.[11] Its official budget was $160 million, split between Warner Bros. and Legendary.[12] Nolan's reputation and success with The Dark Knight helped secure the film's US$100 million in advertising expenditure.Inception's premiere was held in London on July 8, 2010; it was released in both conventional and IMAX theaters beginning on July 16, 2010.[13][14] Inception grossed over $828 million worldwide, becoming the fourth-highest-grossing film of 2010. Considered one of the best films of the 2010s,[15] Inception won four Academy Awards (Best Cinematography, Best Sound Editing, Best Sound Mixing, and Best Visual Effects) and was nominated for four more: Best Picture, Best Original Screenplay, Best Art Direction, and Best Original Score"
        },
        {
            id: "12",
            category: "Hollywood",
            date: "12/09/2022",
            title: "TENET",
            img: "https://wallpapercave.com/wp/wp8512057.jpg",
            description: "Armed with only one word, Tenet, and fighting for the survival of the entire world, a Protagonist journeys through a twilight world of international espionage on a mission that will unfold in something beyond real time.",
            type: "Hollywood / 11 September 2022",
            imdb: "IMDB - 4/5",
            release: "Release Date - 09/05/2021"
        },
        {
            id: "13",
            category: "Hollywood",
            date: "12/09/2022",
            title: "LOST IN SPACE",
            img: "https://resizing.flixster.com/CyFVxPG3cvQwYcFD8FU_2N_hrUg=/ems.cHJkLWVtcy1hc3NldHMvdHZzZWFzb24vUlRUVjU3ODk3MC53ZWJw",
            description: "After crash-landing on an alien planet, the Robinson family fight against all odds to survive and escape, but they're surrounded by hidden dangers.",
            imdb: "IMDB - 4/5",
            release: "Release Date - 09/05/2021",
            details: text
        },

        {
            id: "14",
            category: "Hollywood",
            date: "12/09/2022",
            title: "BIG HERO 6",
            img: "https://m.media-amazon.com/images/I/91neoLOIftL._AC_SY679_.jpg",
            description: "A special bond develops between plus-sized inflatable robot Baymax and prodigy Hiro Hamada, who together team up with a group of friends to form a band of high-tech heroes.",
            imdb: "IMDB - 4/5",
            release: "Release Date - 09/05/2021",
            details: text
        },
        {
            id: "15",
            category: "Hollywood",
            date: "12/09/2022",
            title: "THE PURSUIT OF HAPPYNESS",
            img: "https://m.media-amazon.com/images/M/MV5BMTQ5NjQ0NDI3NF5BMl5BanBnXkFtZTcwNDI0MjEzMw@@._V1_FMjpg_UX1000_.jpg",
            description: "A struggling salesman takes custody of his son as he's poised to begin a life-changing professional career.",
            imdb: "IMDB - 4/5",
            release: "Release Date - 09/05/2021",
            details: text
        },
        {
            id: "16",
            category: "Hollywood",
            date: "12/09/2022",
            title: "EDGE OF TOMORROW",
            img: "https://m.media-amazon.com/images/M/MV5BMTc5OTk4MTM3M15BMl5BanBnXkFtZTgwODcxNjg3MDE@._V1_.jpg",
            description: "A soldier fighting aliens gets to relive the same day over and over again, the day restarting every time he dies.",
            imdb: "IMDB - 4/5",
            release: "Release Date - 09/05/2021",
            details: text
        },
        {
            id: "17",
            category: "Hollywood",
            date: "12/09/2022",
            title: "ESCAPE ROOM",
            img: "https://m.media-amazon.com/images/M/MV5BMjQ2NDMwMTY3MF5BMl5BanBnXkFtZTgwNDg5OTc1NjM@._V1_FMjpg_UX1000_.jpg",
            description: "Six strangers find themselves in a maze of deadly mystery rooms and must use their wits to survive.",
            imdb: "IMDB - 4/5",
            release: "Release Date - 09/05/2021",
            details: text
        },
        {
            id: "18",
            category: "Food",
            date: "12/09/2022",
            title: "Apple Dump Cake",
            img: "https://www.spendwithpennies.com/wp-content/uploads/2022/07/Apple-Dump-Cake-SpendWithPennies-9-500x750.jpg",
            description: "A dump cake gets its name from how easy it is to prepare. Simply dump in the ingredients and bake. No mixer, no stirring!",
            imdb: "Review - 4.81 from 21 viewers",
            release: "09/05/2021",
            details: text
        },
        {
            id: "19",
            category: "Food",
            date: "12/09/2022",
            title: "Air Fryer Fried Chicken",
            img: "https://www.spendwithpennies.com/wp-content/uploads/2022/06/Air-Fryer-Fried-Chicken-SpendWithPennies-14-500x750.jpg",
            description: "It is quick to make without the fuss or muss of a deep fryer meaning less fat, calories, and mess with all of the flavors.",
            imdb: "Review - 4.81 from 21 viewers",
            release: "09/05/2021",
            details: text
        },
        {
            id: "20",
            category: "Food",
            date: "12/09/2022",
            title: "Double Chocolate Muffins",
            img: "https://www.spendwithpennies.com/wp-content/uploads/2022/05/Chocolate-Muffins-SpendWithPennies-9-500x750.jpg",
            description: "Light and moist with a delicious crust, they're made with a double dose of chocolate baked up into lusciously sweet muffins. Serve for breakfast or enjoy as a mid-day or after-school snack.",
            imdb: "Review - 4.81 from 21 viewers",
            release: "09/05/2021",
            details: text
        },
        {
            id: "21",
            category: "Food",
            date: "12/09/2022",
            title: "Strawberry Mousse",
            img: "https://www.spendwithpennies.com/wp-content/uploads/2022/04/Homemade-Strawberry-Mousse-SpendWithPennies-10-500x750.jpg",
            description: "Spring has sprung and summer is almost here! This uber-easy recipe uses fresh strawberries, gelatin, and whipping cream to make a dessert that will have everyone asking for more.",
            imdb: "Review - 4.81 from 21 viewers",
            release: "09/05/2021",
            details: text
        },
        {
            id: "22",
            category: "Food",
            date: "12/09/2022",
            title: "Grape ice cream",
            img: "https://www.spendwithpennies.com/wp-content/uploads/2021/11/No-Churn-Grape-Ice-Cream-SpendWithPennies-13-1024x1536.jpg",
            description: "Few activities are more fun than making homemade ice cream! This recipe makes grape ice cream without an ice cream machine! This is the one and only homemade ice cream recipe you’ll ever need!",
            imdb: "Review - 4.81 from 21 viewers",
            release: "09/05/2021",
            details: text
        },
        {
            id: "23",
            category: "Food",
            date: "12/09/2022",
            title: "Lemon Pepper Wings",
            img: "https://www.spendwithpennies.com/wp-content/uploads/2022/02/Lemon-Pepper-Wings-SpendWithPennies-13-500x750.jpg",
            description: "Chicken wings with extra crispy skin (don’t worry, no deep fryer needed) are tossed in zesty buttery lemon sauce and seasoned with freshly cracked pepper. Wing perfection.",
            imdb: "Review - 4.81 from 21 viewers",
            release: "09/05/2021",
            details: text
        },
        {
            id: "24",
            category: "Food",
            date: "12/09/2022",
            title: "Creamy Garlic Pasta",
            img: "https://www.spendwithpennies.com/wp-content/uploads/2021/08/SWP-Creamy-Garlic-Noodles-44-500x750.jpg",
            description: "This Creamy Garlic Pasta is a favorite because it’s so hearty, cheesy, and has a delicious garlic flavor.Best of all, this pasta recipe is ready in minutes (literally!)",
            imdb: "Review - 4.81 from 21 viewers",
            release: "09/05/2021",
            details: text
        },
        {
            id: "25",
            category: "Food",
            date: "12/09/2022",
            title: "Creamy Italian Dressing",
            img: "https://www.spendwithpennies.com/wp-content/uploads/2021/04/Creamy-Italian-Dressing-SpendWithPennies-4-500x750.jpg",
            description: "Homemade Creamy Italian Dressing is quick to make and full of zesty flavor! A creamy base loaded with herbs, red wine vinegar, and seasonings.",
            imdb: "Review - 4.81 from 21 viewers",
            release: "09/05/2021",
            details: text
        },
        {
            id: "26",
            category: "Food",
            date: "12/09/2022",
            title: "Potato Wedges",
            img: "https://www.spendwithpennies.com/wp-content/uploads/2021/02/Rosemary-Air-Fryer-Potato-Wedges-SpendWithPennies-4-500x750.jpg",
            description: "Air Fryer Potato Wedges are crispy and perfect for dipping! Toss them with some rosemary and finish them off with a generous sprinkle of parmesan cheese and you’ve got a new favorite snack!",
            imdb: "Review - 4.81 from 21 viewers",
            release: "09/05/2021",
            details: text
        },
        {
            id: "27",
            category: "Food",
            date: "12/09/2022",
            title: "Blueberry Smoothie",
            img: "https://www.spendwithpennies.com/wp-content/uploads/2020/09/Blueberry-Smoothie-SpendWithPennies-3-500x750.jpg",
            description: "This blueberry smoothie recipe hits the spot with creamy yogurt and frozen fruit!Smoothies are a great way to enjoy a healthy meal on the go and the perfect solution to a busy morning.",
            imdb: "Review - 4.81 from 21 viewers",
            release: "09/05/2021",
            details: text
        },
        {
            id: "28",
            category: "Food",
            date: "12/09/2022",
            title: "Fresh Mojitos",
            img: "https://www.spendwithpennies.com/wp-content/uploads/2016/03/Classic-Mojitos-recipe-22-500x763.jpg",
            description: "Fresh Homemade Mojitos are my go-to cocktail! This easy mojito recipe features freshly squeezed lime juice, muddled mint, a quick simple syrup and a splash of rum.  The result is a refreshing and delicious cocktail that everyone will request again and again!",
            imdb: "Review - 4.81 from 21 viewers",
            release: "09/05/2021",
            details: text
        },

       
        {
            id: "29",
            category: "Places",
            date: "12/09/2022",
            title: "Taj Mahal",
            img: "https://blog.savaari.com/wp-content/uploads/2022/08/adi-lica-ZpN1lhola0s-unsplash-1-683x1024.jpg",
            description: "If you consider the top 10 historical places in India, Taj Mahal will always be ranking high in the list. Explore the ultimate epitome of love, the Taj Mahal, whose grandeur remains unmatched in history and today this is one of the weekend getaways from Delhi.",
            imdb: "Location - Agra",
            release: "Built By - Shah Jahan",
            details: text
        },
        {
            id: "30",
            category: "Places",
            date: "12/09/2022",
            title: "Qutub Minar",
            img: "https://blog.savaari.com/wp-content/uploads/2022/08/marvin-castelino-z4GzALvJ8xs-unsplash-2-1152x1536.jpg",
            description: "The Qutub Minar is definitely one of the most historical sites in India. It is one of the finest examples of Indo-Muslim architecture with its intricate red sandstone storeys. These are dotted with carvings and verses from the Quran and are mostly in Arabic and Nagari.",
            imdb: "Location - Delhi",
            release: "Built By - Qitub-ud-Din Aibak",
            details: "Regarded as the site of the first Muslim kingdom in northern India, the Qutub Minar is definitely one of the most historical sites in India. It is one of the finest examples of Indo-Muslim architecture with its intricate red sandstone storeys. These are dotted with carvings and verses from the Quran and are mostly in Arabic and Nagari. Qutub Minar is one of the famous historical places in India and is said to have got its name from Qutb-ud-din Aibak who was the first Muslim ruler of North India. The first mosque in India Quwwat-ul-Islam Masjid is also located at the foot of the Qutub Minar."
        },
        {
            id: "31",
            category: "Places",
            date: "12/09/2022",
            title: "Hawa Mahal",
            img: "https://i.pinimg.com/originals/84/4c/37/844c374826d2fa4a310edf20d2f994d6.jpg",
            description: "The ‘Palace of Winds’ or Hawa Mahal gets its name due to the fact that it looks like a honeycomb of a beehive with its 953 intricate windows. It is also shaped like a crown as the ruler who built it, Maharaja Sawai Pratap Singh, was a major devotee of Lord Krishna",
            imdb: "Location - Jaipur",
            release: "Built By - Pratap Singh",
            details: text
        },
        {
            id: "32",
            category: "Places",
            date: "12/09/2022",
            title: "Adiyogi Shiva Statue",
            img: "https://i.pinimg.com/originals/bc/af/bd/bcafbdad4a3c903b300de86ef870578e.jpg",
            description: "The Adiyogi statue is a 34-metre tall (112 ft), 45-metre long (147 ft) and 25-metre wide (82 ft) steel statue of Shiva with Thirunamam at Coimbatore, Tamil Nadu. It is recognized by the Guinness World Records as the Largest Bust Sculpture” in the world.",
            imdb: "Location - Tamil Nadu",
            release: "Built By - Sadhguru Jaggi Vasudev",
            details: text
        },
        {
            id: "33",
            category: "Places",
            date: "12/09/2022",
            title: "Gwalior Fort",
            img: "https://mediaindia.eu/wp-content/uploads/2020/12/Gwalior-fort-inside.jpg",
            description: "A legendary fort of its time, Gwalior Fort has been around for a long time. Some sources suggest that it was constructed in or before 6 century Mughal Emporer Babur described this place to be a pearl among Indian fortresses. ",
            imdb: "Location - Madhya Pradesh",
            release: "Built By - Man Singh Tomar",
            details: text
        },
        {
            id: "34",
            category: "Places",
            date: "12/09/2022",
            title: "India Gate",
            img: "https://i.pinimg.com/736x/d9/31/e4/d931e46254d1d51b4743b43be8aefec4.jpg",
            description: "This 42-meter monument is often compared with Arch de Triomphe in Paris and Arch of Constantine in Rome. Located on the Rajpath, it was designed by Edwin Lutyens. Dedicated to the 82,000 soldiers of both Indian and British descent who fought in World War One ",
            imdb: "Location - Delhi",
            release: "Built By - Edwin Lutyens",
            details: text
        },
        {
            id: "35",
            category: "Places",
            date: "12/09/2022",
            title: "Victoria Memorial",
            img: "https://i.pinimg.com/736x/a7/c3/9d/a7c39de0686bc65f1ab69b4861e587e5.jpg",
            description: "The Victoria Memorial in Kolkata is one of the most historical tourist places in India and was built during the peak of the British era in India. The then Viceroy Lord Curzon laid down the idea of this monument but its actual design was done by Sir William Emerson.",
            imdb: "Location - Kolkata",
            release: "Built By - Lord Curzon",
            details: text
        },
        {
            id: "36",
            category: "Places",
            date: "12/09/2022",
            title: "Kumbhalgarh Fort",
            img: "https://i.pinimg.com/736x/cd/49/7f/cd497f8a379d95351e3bafd3987670dc.jpg",
            description: "It is famous for the majestic fort as well as the wildlife sanctuary. Built by King Kumbha, it falls under the care of the district of Rajasamand. It is also only 82 km from Udaipur, making it a great day trip if you are in the city. It is a major tourist attraction due to the the magnificent structure of the palace.",
            imdb: "Location - Rajasthan",
            release: "Built By - Rana Kumbha",
            details: text
        },
        {
            id: "37",
            category: "Places",
            date: "12/09/2022",
            title: "Hampi",
            img: "https://i.pinimg.com/736x/a5/35/b2/a535b29cf9d2e879de8d8fc188b643ca--incredible-india-in-india.jpg",
            description: "Hampi’s rocky outcrops, chariot structures, gopurams, elephant stables, ornate halls – all depict the tale of one of the greatest Hindu kingdoms. It is believed that Lord Rama and his brother visited this historical place to search for Sita. ",
            imdb: "Location - Karnataka",
            release: "Built By - Lakkana Dandesha",
            details: text
        },
        {
            id: "38",
            category: "Places",
            date: "12/09/2022",
            title: "Jatayu Earth's Center Nature Park",
            img: "https://i.pinimg.com/originals/8b/f7/20/8bf7206bcc501d5800371da8e202b1d1.jpg",
            description: "It is a park and tourism centre at Chadayamangalam in Kollam district of Kerala. It stands at an altitude of 350m (1200ft) above the mean sea level. Jatayu Nature Park holds the distinction of having the world’s largest bird sculpture, which is of Jatayu.",
            imdb: "Location - Kerala",
            release: "Built By - Rajiv Anchal",
            details: text
        },
        {
            id: "39",
            category: "Places",
            date: "12/09/2022",
            title: "Konark Temple",
            img: "https://i.pinimg.com/736x/bf/55/ca/bf55ca36709f5e212774bee9f4c1eaa6.jpg",
            description: "Built by the great ruler of the Ganga dynasty – King Narasimhadeva I, along with 1200 artisans, the Konark Temple is magic set in stone. Located on the coast of the Bay of Bengal, this temple signifies the exquisite detailing of ancient architecture and is one of the famous historical places in India.",
            imdb: "Location - Madurai",
            release: "Built By - Raja Narasinghs Deva I",
            details: text
        },

        {
            id: "40",
            category: "Places",
            date: "12/09/2022",
            title: "Meenakshi Amman Temple",
            img: "https://i.pinimg.com/736x/16/94/fa/1694fa08f125b46f6f8308404a0d16c5.jpg",
            description: "A historic hindu temple located on the southern bank of the Vaigai River in Madurai, this majestic temple is all about seeking good vibes, positivity and wholesome spirituality. It is dedicated to Parvati, known as Meenakshi, and her spouse, Shiva.",
            imdb: "Location - Odisha",
            release: "Built By - King Kulasekara Pandya",
            details: text
        },

        {
            id: "41",
            category: "Places",
            date: "12/09/2022",
            title: "Nalanda University",
            img: "https://i.pinimg.com/550x/d8/c4/1f/d8c41fe696c9824cd7b19624cbb5f14c.jpg",
            description: "The most popular Mahavihara of the ancient times, it’s a significant Buddhist seat of academic excellence and a modest pligrim centre. Seek spirituality, good vibes, positivity, calm and serenity at this one of the most enchanting Indian historical places.",
            imdb: "Location - Bihar",
            release: "Built By - Gupta Dynasty",
            details: text
        },

        {
            id: "42",
            category: "Technology",
            date: "12/09/2022",
            title: "DART Mission",
            img: "https://i.kinja-img.com/gawker-media/image/upload/c_fit,f_auto,g_center,pg_1,q_60,w_965/bd71495b22c0d8488061f0d1cb8cb5c2.jpg",
            description: "DART Mission to Deflect an Asteroid. A NASA spacecraft called DART is set to deliberately crash into a small asteroid as part of a planetary defense test. While this space rock isn’t of concern, what we learn from the mission could help us if ever an asteroid does head our way.",
            imdb: "",
            release: "",
            details: text
        },

        {
            id: "43",
            category: "Technology",
            date: "12/09/2022",
            title: "Hertzbleed Chip",
            img: "https://images.newscientist.com/wp-content/uploads/2022/06/16141020/SEI_110019669.jpg?width=800",
            description: "It is a new computer hack that takes advantage of a power-saving feature common to modern computer chips in order to steal sensitive data. It has been demonstrated in the lab and could be used by hackers in the wild.",
            imdb: "",
            release: "",
            details: text
        },

        {
            id: "44",
            category: "Technology",
            date: "12/09/2022",
            title: "Quantum Batteries",
            img: "https://images.newscientist.com/wp-content/uploads/2022/09/05135216/SEI_122621396.jpg?width=800",
            description: "Strange technology that could provide instant power. The battery, as US comedian Demetri Martin pointed out, is one technology that we personify. “Other things stop working or they break,” he said. “But batteries – they die.” The observation is keener than it may at first appear.",
            imdb: "",
            release: "",
            details: text
        },

        {
            id: "45",
            category: "Technology",
            date: "12/09/2022",
            title: "Encryption Tools",
            img: "https://images.newscientist.com/wp-content/uploads/2022/07/05154804/SEI_113156160.jpg?width=800",
            description: "US chooses encryption tools to protect us from quantum computers. After five years of testing, the US standards body – the National Institute of Standards and Technology (NIST) has announced its chosen cryptographic algorithms that will keep sensitive data safe from quantum computers.",
            imdb: "",
            release: "",
            details: text
        },

        {
            id: "46",
            category: "Technology",
            date: "12/09/2022",
            title: "Rocket Emissions",
            img: "https://images.newscientist.com/wp-content/uploads/2022/06/15104424/SEI_109858602.jpg?width=800",
            description: "Emissions from rocket launches could affect Earth's weather systems. As more and more rockets are launched into space, the pollution they emit could have a growing effect on Earth’s atmosphere and weather systems.",
            imdb: "",
            release: "",
            details: text
        },

        {
            id: "47",
            category: "Technology",
            date: "12/09/2022",
            title: "Meta AI",
            img: "https://images.newscientist.com/wp-content/uploads/2022/09/01160256/SEI_122402626.jpg?width=800",
            description: "Meta AI can tell which words you hear by reading your brainwaves.An AI developed by Facebook’s owner Meta can scan a person’s brainwaves to “hear” what someone else is saying to them. The software is of limited practical use currently, but could be a stepping stone to reading a nonverbal person’s thoughts to allow them to better communicate",
            imdb: "",
            release: "",
            details: text
        },

        {
            id: "48",
            category: "Technology",
            date: "12/09/2022",
            title: "Voice Jammer",
            img: "https://images.newscientist.com/wp-content/uploads/2022/07/27145944/SEI_116639766.jpg?width=800",
            description: "Voice jammer stops anyone from recording you speak. Voice jammers work much like noise-cancelling headphones, which effectively squash unwanted background sound waves out of existence by playing a copy of a background sound wave but with the wave pattern inverted. ",
            imdb: "",
            release: "",
            details: text
        },
    ])
    return (
        <>
        <store.Provider value={[data, setData]}>
            {props.children}
        </store.Provider>

        </>
    )

}

export default Data;