const dummyData = [
    {
        genre:'Punjabi Movies',
        carouselitems: [
            {
                title: "item1",
                thumbnailUrl: "https://s3-us-west-1.amazonaws.com/elasticbeanstalk-us-west-1-834181891871/punjabi_movies/images/Bambukat.jpg",
                imageUrl:'',
                videoUrl:'https://s3-us-west-1.amazonaws.com/elasticbeanstalk-us-west-1-834181891871/punjabi_movies/videos/Bambukat.mp4',
                createdAt:"July 17th 2017, 12:42:40 pm",
                updatedAt:"July 17th 2017, 12:42:40 pm",
                detailDescription: 'Bambukat, set in 1960, is a story about two sisters. One is a simple girl, Pakko, who is not fair skinned and look dusky, and Sami, who is prettier than Pakko. The story of Bambukat is how Pakko\'s husband tries to impress his in-laws.',
                director:'Pankaj Batra',
                actors:[
                    {
                        maleLead : 'Ammy Virk',
                        femaleLead : 'Simi Chahal',
                        comedian : 'Binnu Dhillon'
                    }
                ]
            },
            {
                title: "item2",
                thumbnailUrl: "https://s3-us-west-1.amazonaws.com/elasticbeanstalk-us-west-1-834181891871/punjabi_movies/images/Lahoriye.jpg",
                imageUrl:'https://s3-us-west-1.amazonaws.com/elasticbeanstalk-us-west-1-834181891871/punjabi_movies/images/Lahoriye.jpg',
                videoUrl:'https://s3-us-west-1.amazonaws.com/elasticbeanstalk-us-west-1-834181891871/punjabi_movies/videos/Lahoriye.mp4',
                createdAt:"July 17th 2017, 12:42:40 pm",
                updatedAt:"July 17th 2017, 12:42:40 pm",
                detailDescription: 'The partition of British India in 1947 means that two young lovers from neighboring villages must live in separate nation states.',
                director:'Amberdeep Singh',
                actors:[
                    {
                        maleLead : 'Amarinder Gill',
                        femaleLead : 'Sargun Mehta',
                        comedian : 'Guggu Gill',
                    }
                ]
            },
            {
                title: "item3",
                thumbnailUrl: "https://s3-us-west-1.amazonaws.com/elasticbeanstalk-us-west-1-834181891871/punjabi_movies/images/ManjeBistre.jpg",
                imageUrl:'https://s3-us-west-1.amazonaws.com/elasticbeanstalk-us-west-1-834181891871/punjabi_movies/images/ManjeBistre.jpg',
                videoUrl:'https://s3-us-west-1.amazonaws.com/elasticbeanstalk-us-west-1-834181891871/punjabi_movies/videos/ManjeBistre.mp4',
                createdAt:"July 17th 2017, 12:42:40 pm",
                updatedAt:"July 17th 2017, 12:42:40 pm",
                detailDescription: 'While getting prepared for his sister\'s wedding, a young man attempts to woo a girl whose marriage to another man has already been fixed.',
                director:'Baljit Singh Deo',
                actors:[
                    {
                        maleLead : 'Gippy Grewal',
                        femaleLead : 'Sonam Bajwa',
                        comedian : 'Karamjit Anmol',
                    }
                ]
            },
            {
                title: "item4",
                thumbnailUrl: "https://s3-us-west-1.amazonaws.com/elasticbeanstalk-us-west-1-834181891871/punjabi_movies/images/NikkaZaildar.jpg",
                imageUrl:'https://s3-us-west-1.amazonaws.com/elasticbeanstalk-us-west-1-834181891871/punjabi_movies/images/NikkaZaildar.jpg',
                videoUrl:'https://s3-us-west-1.amazonaws.com/elasticbeanstalk-us-west-1-834181891871/punjabi_movies/videos/NikkaZaildar.mp4',
                createdAt:"July 17th 2017, 12:42:40 pm",
                updatedAt:"July 17th 2017, 12:42:40 pm",
                detailDescription: 'A young man concocts a scheme to marry a reluctant fellow student, but finds the task more difficult than it first appeared.',
                director:'Baljit Singh Deo',
                actors:[
                    {
                        maleLead : 'Ammy Virk',
                        femaleLead : 'Sonam Bajwa',
                        comedian : 'Karamjit Anmol',
                    },
                ]
            },
            {
                title: "item5",
                thumbnailUrl: "https://s3-us-west-1.amazonaws.com/elasticbeanstalk-us-west-1-834181891871/punjabi_movies/images/Bambukat.jpg",
                imageUrl:'https://s3-us-west-1.amazonaws.com/elasticbeanstalk-us-west-1-834181891871/punjabi_movies/images/Bambukat.jpg',
                videoUrl:'https://s3-us-west-1.amazonaws.com/elasticbeanstalk-us-west-1-834181891871/punjabi_movies/videos/Bambukat.mp4',
                createdAt:"July 17th 2017, 12:42:40 pm",
                updatedAt:"July 17th 2017, 12:42:40 pm",
                detailDescription: 'Bambukat, set in 1960, is a story about two sisters. One is a simple girl, Pakko, who is not fair skinned and look dusky, and Sami, who is prettier than Pakko. The story of Bambukat is how Pakko\'s husband tries to impress his in-laws.',
                director:'Pankaj Batra',
                actors:[
                    {
                        maleLead : 'Ammy Virk',
                        femaleLead : 'Simi Chahal',
                        comedian : 'Binnu Dhillon'
                    }
                ]
            },
            {
                title: "item6",
                thumbnailUrl: "https://s3-us-west-1.amazonaws.com/elasticbeanstalk-us-west-1-834181891871/punjabi_movies/images/Bambukat.jpg",
                imageUrl:'https://s3-us-west-1.amazonaws.com/elasticbeanstalk-us-west-1-834181891871/punjabi_movies/images/Bambukat.jpg',
                videoUrl:'https://s3-us-west-1.amazonaws.com/elasticbeanstalk-us-west-1-834181891871/punjabi_movies/videos/Bambukat.mp4',
                createdAt:"July 17th 2017, 12:42:40 pm",
                updatedAt:"July 17th 2017, 12:42:40 pm",
                detailDescription: 'Bambukat, set in 1960, is a story about two sisters. One is a simple girl, Pakko, who is not fair skinned and look dusky, and Sami, who is prettier than Pakko. The story of Bambukat is how Pakko\'s husband tries to impress his in-laws.',
                director:'Pankaj Batra',
                actors:[
                    {
                        maleLead : 'Ammy Virk',
                        femaleLead : 'Simi Chahal',
                        comedian : 'Binnu Dhillon'
                    }
                ]
            },
            {
                title: "item7",
                thumbnailUrl: "https://s3-us-west-1.amazonaws.com/elasticbeanstalk-us-west-1-834181891871/punjabi_movies/images/Lahoriye.jpg",
                imageUrl:'https://s3-us-west-1.amazonaws.com/elasticbeanstalk-us-west-1-834181891871/punjabi_movies/images/Lahoriye.jpg',
                videoUrl:'https://s3-us-west-1.amazonaws.com/elasticbeanstalk-us-west-1-834181891871/punjabi_movies/videos/Lahoriye.mp4',
                createdAt:"July 17th 2017, 12:42:40 pm",
                updatedAt:"July 17th 2017, 12:42:40 pm",
                detailDescription: 'The partition of British India in 1947 means that two young lovers from neighboring villages must live in separate nation states.',
                director:'Amberdeep Singh',
                actors:[
                    {
                        maleLead : 'Amrinder Gill',
                        femaleLead : 'Sargun Mehta',
                        comedian : 'Guggu Gill',
                    }
                ]
            },
            {
                title: "item8",
                thumbnailUrl: "https://s3-us-west-1.amazonaws.com/elasticbeanstalk-us-west-1-834181891871/punjabi_movies/images/ManjeBistre.jpg",
                imageUrl:'https://s3-us-west-1.amazonaws.com/elasticbeanstalk-us-west-1-834181891871/punjabi_movies/images/ManjeBistre.jpg',
                videoUrl:'https://s3-us-west-1.amazonaws.com/elasticbeanstalk-us-west-1-834181891871/punjabi_movies/videos/ManjeBistre.mp4',
                createdAt:"July 17th 2017, 12:42:40 pm",
                updatedAt:"July 17th 2017, 12:42:40 pm",
                detailDescription: 'While getting prepared for his sister\'s wedding, a young man attempts to woo a girl whose marriage to another man has already been fixed.',
                director:'Baljit Singh Deo',
                actors:[
                    {
                        maleLead : 'Gippy Grewal',
                        femaleLead : 'Sonam Bajwa',
                        comedian : 'Karamjit Anmol',
                    }
                ]
            },
            {
                title: "item9",
                thumbnailUrl: "https://s3-us-west-1.amazonaws.com/elasticbeanstalk-us-west-1-834181891871/punjabi_movies/images/Bambukat.jpg",
                imageUrl:'https://s3-us-west-1.amazonaws.com/elasticbeanstalk-us-west-1-834181891871/punjabi_movies/images/Bambukat.jpg',
                videoUrl:'https://s3-us-west-1.amazonaws.com/elasticbeanstalk-us-west-1-834181891871/punjabi_movies/videos/Bambukat.mp4',
                createdAt:"July 17th 2017, 12:42:40 pm",
                updatedAt:"July 17th 2017, 12:42:40 pm",
                detailDescription: 'Bambukat, set in 1960, is a story about two sisters. One is a simple girl, Pakko, who is not fair skinned and look dusky, and Sami, who is prettier than Pakko. The story of Bambukat is how Pakko\'s husband tries to impress his in-laws.',
                director:'Pankaj Batra',
                actors:[
                    {
                        maleLead : 'Ammy Virk',
                        femaleLead : 'Simi Chahal',
                        comedian : 'Binnu Dhillon'
                    }
                ]
            },
            {
                title: "item10",
                thumbnailUrl: "https://s3-us-west-1.amazonaws.com/elasticbeanstalk-us-west-1-834181891871/punjabi_movies/images/Lahoriye.jpg",
                imageUrl:'https://s3-us-west-1.amazonaws.com/elasticbeanstalk-us-west-1-834181891871/cartoons/images/BBB_Episode1.jpg',
                videoUrl:'https://s3-us-west-1.amazonaws.com/elasticbeanstalk-us-west-1-834181891871/punjabi_movies/videos/Lahoriye.mp4',
                createdAt:"July 17th 2017, 12:42:40 pm",
                updatedAt:"July 17th 2017, 12:42:40 pm",
                detailDescription: 'The partition of British India in 1947 means that two young lovers from neighboring villages must live in separate nation states.',
                director:'Amberdeep Singh',
                actors:[
                    {
                        maleLead : 'Amrinder Gill',
                        femaleLead : 'Sargun Mehta',
                        comedian : 'Guggu Gill',
                    }
                ]
            },
            {
                title: "item11",
                thumbnailUrl: "https://s3-us-west-1.amazonaws.com/elasticbeanstalk-us-west-1-834181891871/punjabi_movies/images/ManjeBistre.jpg",
                imageUrl:'https://s3-us-west-1.amazonaws.com/elasticbeanstalk-us-west-1-834181891871/cartoons/images/Ducktales_Episode2.jpg',
                videoUrl:'https://s3-us-west-1.amazonaws.com/elasticbeanstalk-us-west-1-834181891871/punjabi_movies/videos/ManjeBistre.mp4',
                createdAt:"July 17th 2017, 12:42:40 pm",
                updatedAt:"July 17th 2017, 12:42:40 pm",
                detailDescription: 'While getting prepared for his sister\'s wedding, a young man attempts to woo a girl whose marriage to another man has already been fixed.',
                director:'Baljit Singh Deo',
                actors:[
                    {
                        maleLead : 'Gippy Grewal',
                        femaleLead : 'Sonam Bajwa',
                        comedian : 'Karamjit Anmol',
                    }
                ]
            },
            {
                title: "item12",
                thumbnailUrl: "https://s3-us-west-1.amazonaws.com/elasticbeanstalk-us-west-1-834181891871/punjabi_movies/images/Lahoriye.jpg",
                imageUrl:'https://s3-us-west-1.amazonaws.com/elasticbeanstalk-us-west-1-834181891871/punjabi_movies/images/Lahoriye.jpg',
                videoUrl:'https://s3-us-west-1.amazonaws.com/elasticbeanstalk-us-west-1-834181891871/punjabi_movies/videos/Lahoriye.mp4',
                createdAt:"July 17th 2017, 12:42:40 pm",
                updatedAt:"July 17th 2017, 12:42:40 pm",
                detailDescription: 'The partition of British India in 1947 means that two young lovers from neighboring villages must live in separate nation states.',
                director:'Amberdeep Singh',
                actors:[
                    {
                        maleLead : 'Amrinder Gill',
                        femaleLead : 'Sargun Mehta',
                        comedian : 'Guggu Gill',
                    }
                ]
            },
            {
                title: "item13",
                thumbnailUrl: "https://s3-us-west-1.amazonaws.com/elasticbeanstalk-us-west-1-834181891871/punjabi_movies/images/ManjeBistre.jpg",
                imageUrl:'https://s3-us-west-1.amazonaws.com/elasticbeanstalk-us-west-1-834181891871/punjabi_movies/images/ManjeBistre.jpg',
                videoUrl:'https://s3-us-west-1.amazonaws.com/elasticbeanstalk-us-west-1-834181891871/punjabi_movies/videos/ManjeBistre.mp4',
                createdAt:"July 17th 2017, 12:42:40 pm",
                updatedAt:"July 17th 2017, 12:42:40 pm",
                detailDescription: 'While getting prepared for his sister\'s wedding, a young man attempts to woo a girl whose marriage to another man has already been fixed.',
                director:'Baljit Singh Deo',
                actors:[
                    {
                        maleLead : 'Gippy Grewal',
                        femaleLead : 'Sonam Bajwa',
                        comedian : 'Karamjit Anmol',
                    }
                ]
            },
            {
                title: "item14",
                thumbnailUrl: "https://s3-us-west-1.amazonaws.com/elasticbeanstalk-us-west-1-834181891871/punjabi_movies/images/NikkaZaildar.jpg",
                imageUrl:'https://s3-us-west-1.amazonaws.com/elasticbeanstalk-us-west-1-834181891871/cartoons/images/Ducktales_Episode2.jpg',
                videoUrl:'https://s3-us-west-1.amazonaws.com/elasticbeanstalk-us-west-1-834181891871/punjabi_movies/videos/NikkaZaildar.mp4',
                createdAt:"July 17th 2017, 12:42:40 pm",
                updatedAt:"July 17th 2017, 12:42:40 pm",
                detailDescription: 'A young man concocts a scheme to marry a reluctant fellow student, but finds the task more difficult than it first appeared.',
                director:'Baljit Singh Deo',
                actors:[
                    {
                        maleLead : 'Ammy Virk',
                        femaleLead : 'Sonam Bajwa',
                        comedian : 'Karamjit Anmol',
                    },
                ]
            },
        ]
    },
    {
        genre:'Hindi Movies',
        carouselitems: [
            {
                title: "Bambukat",
                thumbnailUrl: "https://s3-us-west-1.amazonaws.com/elasticbeanstalk-us-west-1-834181891871/punjabi_movies/images/Bambukat.jpg",
                imageUrl:'https://s3-us-west-1.amazonaws.com/elasticbeanstalk-us-west-1-834181891871/punjabi_movies/images/Bambukat.jpg',
                videoUrl:'https://s3-us-west-1.amazonaws.com/elasticbeanstalk-us-west-1-834181891871/punjabi_movies/videos/Bambukat.mp4',
                createdAt:"July 17th 2017, 12:42:40 pm",
                updatedAt:"July 17th 2017, 12:42:40 pm",
                detailDescription: 'Bambukat, set in 1960, is a story about two sisters. One is a simple girl, Pakko, who is not fair skinned and look dusky, and Sami, who is prettier than Pakko. The story of Bambukat is how Pakko\'s husband tries to impress his in-laws.',
                director:'Pankaj Batra',
                actors:[
                    {
                        maleLead : 'Ammy Virk',
                        femaleLead : 'Simi Chahal',
                        comedian : 'Binnu Dhillon'
                    }
                ]
            },
            {
                title: "Lahoriye",
                thumbnailUrl: "https://s3-us-west-1.amazonaws.com/elasticbeanstalk-us-west-1-834181891871/punjabi_movies/images/Lahoriye.jpg",
                imageUrl:'https://s3-us-west-1.amazonaws.com/elasticbeanstalk-us-west-1-834181891871/punjabi_movies/images/Lahoriye.jpg',
                videoUrl:'https://s3-us-west-1.amazonaws.com/elasticbeanstalk-us-west-1-834181891871/punjabi_movies/videos/Lahoriye.mp4',
                createdAt:"July 17th 2017, 12:42:40 pm",
                updatedAt:"July 17th 2017, 12:42:40 pm",
                detailDescription: 'The partition of British India in 1947 means that two young lovers from neighboring villages must live in separate nation states.',
                director:'Amberdeep Singh',
                actors:[
                    {
                        maleLead : 'Amrinder Gill',
                        femaleLead : 'Sargun Mehta',
                        comedian : 'Guggu Gill',
                    }
                ]
            },
            {
                title: "Maje Bistre",
                thumbnailUrl: "https://s3-us-west-1.amazonaws.com/elasticbeanstalk-us-west-1-834181891871/punjabi_movies/images/ManjeBistre.jpg",
                imageUrl:'https://s3-us-west-1.amazonaws.com/elasticbeanstalk-us-west-1-834181891871/punjabi_movies/images/ManjeBistre.jpg',
                videoUrl:'https://s3-us-west-1.amazonaws.com/elasticbeanstalk-us-west-1-834181891871/punjabi_movies/videos/ManjeBistre.mp4',
                createdAt:"July 17th 2017, 12:42:40 pm",
                updatedAt:"July 17th 2017, 12:42:40 pm",
                detailDescription: 'While getting prepared for his sister\'s wedding, a young man attempts to woo a girl whose marriage to another man has already been fixed.',
                director:'Baljit Singh Deo',
                actors:[
                    {
                        maleLead : 'Gippy Grewal',
                        femaleLead : 'Sonam Bajwa',
                        comedian : 'Karamjit Anmol',
                    }
                ]
            },
            {
                title: "Nikka Zaildar",
                thumbnailUrl: "https://s3-us-west-1.amazonaws.com/elasticbeanstalk-us-west-1-834181891871/punjabi_movies/images/NikkaZaildar.jpg",
                imageUrl:'https://s3-us-west-1.amazonaws.com/elasticbeanstalk-us-west-1-834181891871/punjabi_movies/images/NikkaZaildar.jpg',
                videoUrl:'https://s3-us-west-1.amazonaws.com/elasticbeanstalk-us-west-1-834181891871/punjabi_movies/videos/NikkaZaildar.mp4',
                createdAt:"July 17th 2017, 12:42:40 pm",
                updatedAt:"July 17th 2017, 12:42:40 pm",
                detailDescription: 'A young man concocts a scheme to marry a reluctant fellow student, but finds the task more difficult than it first appeared.',
                director:'Baljit Singh Deo',
                actors:[
                    {
                        maleLead : 'Ammy Virk',
                        femaleLead : 'Sonam Bajwa',
                        comedian : 'Karamjit Anmol',
                    },
                ]
            },
            {
                title: "Bambukat",
                thumbnailUrl: "https://s3-us-west-1.amazonaws.com/elasticbeanstalk-us-west-1-834181891871/punjabi_movies/images/Bambukat.jpg",
                imageUrl:'https://s3-us-west-1.amazonaws.com/elasticbeanstalk-us-west-1-834181891871/punjabi_movies/images/Bambukat.jpg',
                videoUrl:'https://s3-us-west-1.amazonaws.com/elasticbeanstalk-us-west-1-834181891871/punjabi_movies/videos/Bambukat.mp4',
                createdAt:"July 17th 2017, 12:42:40 pm",
                updatedAt:"July 17th 2017, 12:42:40 pm",
                detailDescription: 'Bambukat, set in 1960, is a story about two sisters. One is a simple girl, Pakko, who is not fair skinned and look dusky, and Sami, who is prettier than Pakko. The story of Bambukat is how Pakko\'s husband tries to impress his in-laws.',
                director:'Pankaj Batra',
                actors:[
                    {
                        maleLead : 'Ammy Virk',
                        femaleLead : 'Simi Chahal',
                        comedian : 'Binnu Dhillon'
                    }
                ]
            },
            {
                title: "Lahoriye",
                thumbnailUrl: "https://s3-us-west-1.amazonaws.com/elasticbeanstalk-us-west-1-834181891871/punjabi_movies/images/Lahoriye.jpg",
                imageUrl:'https://s3-us-west-1.amazonaws.com/elasticbeanstalk-us-west-1-834181891871/punjabi_movies/images/Lahoriye.jpg',
                videoUrl:'https://s3-us-west-1.amazonaws.com/elasticbeanstalk-us-west-1-834181891871/punjabi_movies/videos/Lahoriye.mp4',
                createdAt:"July 17th 2017, 12:42:40 pm",
                updatedAt:"July 17th 2017, 12:42:40 pm",
                detailDescription: 'The partition of British India in 1947 means that two young lovers from neighboring villages must live in separate nation states.',
                director:'Amberdeep Singh',
                actors:[
                    {
                        maleLead : 'Amrinder Gill',
                        femaleLead : 'Sargun Mehta',
                        comedian : 'Guggu Gill',
                    }
                ]
            },
            {
                title: "Maje Bistre",
                thumbnailUrl: "https://s3-us-west-1.amazonaws.com/elasticbeanstalk-us-west-1-834181891871/punjabi_movies/images/ManjeBistre.jpg",
                imageUrl:'https://s3-us-west-1.amazonaws.com/elasticbeanstalk-us-west-1-834181891871/punjabi_movies/images/ManjeBistre.jpg',
                videoUrl:'https://s3-us-west-1.amazonaws.com/elasticbeanstalk-us-west-1-834181891871/punjabi_movies/videos/ManjeBistre.mp4',
                createdAt:"July 17th 2017, 12:42:40 pm",
                updatedAt:"July 17th 2017, 12:42:40 pm",
                detailDescription: 'While getting prepared for his sister\'s wedding, a young man attempts to woo a girl whose marriage to another man has already been fixed.',
                director:'Baljit Singh Deo',
                actors:[
                    {
                        maleLead : 'Gippy Grewal',
                        femaleLead : 'Sonam Bajwa',
                        comedian : 'Karamjit Anmol',
                    }
                ]
            },
            {
                title: "Nikka Jaili",
                thumbnailUrl: "https://s3-us-west-1.amazonaws.com/elasticbeanstalk-us-west-1-834181891871/punjabi_movies/images/NikkaZaildar.jpg",
                imageUrl:'https://s3-us-west-1.amazonaws.com/elasticbeanstalk-us-west-1-834181891871/punjabi_movies/images/NikkaZaildar.jpg',
                videoUrl:'https://s3-us-west-1.amazonaws.com/elasticbeanstalk-us-west-1-834181891871/punjabi_movies/videos/NikkaZaildar.mp4',
                createdAt:"July 17th 2017, 12:42:40 pm",
                updatedAt:"July 17th 2017, 12:42:40 pm",
                detailDescription: 'A young man concocts a scheme to marry a reluctant fellow student, but finds the task more difficult than it first appeared.',
                director:'Baljit Singh Deo',
                actors:[
                    {
                        maleLead : 'Ammy Virk',
                        femaleLead : 'Sonam Bajwa',
                        comedian : 'Karamjit Anmol',
                    },
                ]
            },
        ]
    },
];

export default dummyData;