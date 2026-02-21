export interface Composer {
    id: string; // slug used in URL
    name: string;
    period: string;
    description: string;
    biography: string;
    affiliations: string[];
    imageUrl: string;
    tags: string[]; // e.g., ['South Africa', 'Choral', '20th Century']
}

export interface Score {
    id: string; // e.g., '1042-S'
    title: string;
    subtitle: string;
    composerId: string;
    price: string;
    licenseType: string;
    imageUrl: string;
    voicing: string;
    language: string;
    difficulty: string;
    duration: string;
    historicalContext: string;
}

export const composers: Composer[] = [
    {
        id: "mzilikazi-khumalo",
        name: "Prof. Mzilikazi Khumalo",
        period: "1932 — 2021",
        description: "A central figure in the development of South African art music, bridging traditional Zulu idioms with extensive choral polyphony and symphonic structures.",
        biography: "Born in KwaNgwelu, Natal, Khumalo's early exposure to both indigenous Zulu musical traditions and Western missionary hymnody profoundly shaped his compositional voice. He served as Professor of African Languages at the University of the Witwatersrand.\n\nHis magnum opus, uShaka KaSenzangakhona, remains one of the most frequently performed choral-orchestral epics on the continent, noted for its rhythmic vitality and structural integrity.",
        affiliations: [
            "University of the Witwatersrand (Professor Emeritus)",
            "Order of Ikhamanga (Silver)"
        ],
        imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBezJT60NAT_mjiwGzTpOHGx_LBgoVieE2XzbTbBnKnrWjheMeRVAUiUe1veoAdEbB0VwM9c0caOqIoCoghrTKc3FmGitckhYQApSMplPOd-YcqRF47Pq1LPh3GH7L84ZD_pENpUQjdqJeACdYNO5s27NqKzW9QrDdpUqPT6oQi1Dss2hoXspy2qeUwNy7QcD7-n2ET2DqBFtKjwCQtraQHGgZ1pZ8_ZpHLuP0mfW9lIJJJ72i8ueyCbJdd_grdlQfrg3-NcYGDrngB",
        tags: ["South Africa", "Choral", "20th Century"]
    },
    {
        id: "ephraim-amu",
        name: "Dr. Ephraim Amu",
        period: "1899 — 1995",
        description: "Pioneer of contemporary Ghanaian art music. His collections define the academic study of Akan harmonic structures.",
        biography: "Ephraim Amu was a Ghanaian composer, musicologist, and teacher. He is renowned for his pioneering work in incorporating traditional African instruments and musical forms into Western-style choral compositions. \n\nHis advocacy for the promotion of African culture through music deeply influenced the development of Ghanaian art music and education. He composed the alternative national anthem of Ghana, 'Yen Ara Asase Ni'.",
        affiliations: [
            "Achimota School",
            "Kwame Nkrumah University of Science and Technology",
            "University of Ghana"
        ],
        imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuA2-GrgUBLORjTwkBuy57bbs4yzVGF4Vs-SH7eoLciu9ZmuHDPtEyCy7pboEwltC1QqCR6XU-h0w_AeG_lC-INfbiddYz9OufL1dq5pcJzxeiKnn5JCISf9NN8EOGVhFkoxspbyV04scbda-YuHMxPLMRVP7l886tx6ZqxF87eyDjKNwHw1laNxqwyBbsja39zkZjW4j-XSWvoSAqCTFRoo6tjULI52ynk52LdHIAgwVzrYQRYsMgRILGQ4-bblb9kG1t1Vi5sngygG",
        tags: ["Ghana", "Choral", "Ethnomusicology", "20th Century"]
    },
    {
        id: "j-h-kwabena-nketia",
        name: "J.H. Kwabena Nketia",
        period: "1921 — 2019",
        description: "Considered Africa's premier musicologist, his compositions seamlessly integrated Akan rhythmic principles with Western classical forms.",
        biography: "Joseph Hanson Kwabena Nketia was a Ghanaian ethnomusicologist and composer. He was considered the most published ethnomusicologist and composer in Africa. His work focused on the integration of traditional Akan musical structures into contemporary classical composition.\n\nHe studied at the University of London and later at Juilliard and Northwestern University, bridging the gap between Western academic traditions and rich African heritage.",
        affiliations: [
            "University of Ghana (Emeritus Professor)",
            "UCLA, University of Pittsburgh",
            "ASCAP Deems Taylor Award"
        ],
        imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDzE4XmR5kL1zVwQ1tT5T4wY9T5yX4zY7U1L2U1wU1L2wT4V1mT4zW1L2uS5xO1I5R8L2zU1X1wV4H4L1zU1wE7xW8uE2L7V1zW1W1yR1zU1wT4vG6xV5V2U3vC4U1xW1wX4vG6xL1N1wX7xT4K4L2xK4T4vG6xT4V2wR1W8uL2wX1T4T4vG6xI4T4",
        tags: ["Ghana", "Ethnomusicology", "20th Century"]
    },
    {
        id: "fela-sowande",
        name: "Fela Sowande",
        period: "1905 — 1987",
        description: "A Nigerian musician and composer who is considered the father of modern Nigerian art music, blending Yoruba themes with Western classical techniques.",
        biography: "Fela Sowande was a Nigerian musician and composer. Considered the father of modern Nigerian art music, he was perhaps the most internationally known African composer of works in the European 'classical' idiom. His music often incorporated Nigerian folk melodies.\n\nSowande studied at the University of London and became a Fellow of the Royal College of Organists. His notable work 'African Suite' for string orchestra explores Yoruba rhythms and melodies within an orchestral framework.",
        affiliations: [
            "University of Ibadan",
            "Howard University",
            "University of Pittsburgh"
        ],
        imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuB2yG5yR1yJ9uWvT6jX1xVw8S1wT9H6vL5xW0fC0Jp8H2yZ1qL1VvL0zH5sE4xH1G0mZ1J6KzL4wR1wX1Q2yL0xP2yL2xP5T4uC1wD3uC4xR8vF4vL3wV7vL5wP8xK5T4uC1wD3vL4xI4xH2Qh_VjR7vK6uO1W",
        tags: ["Nigeria", "Orchestral", "Organ", "20th Century"]
    },
    {
        id: "kenn-kafui",
        name: "Kenn Kafui",
        period: "1951 — 2020",
        description: "Prominent Ghanaian composer known for integrating Ewe rhythmic structures and tonal language into virtuosic choral works.",
        biography: "Kenneth Kweku Avotri Kafui was a Ghanaian composer and conductor. He was a lecturer in music theory and composition at the University of Ghana.\n\nHis compositions are celebrated for their vibrant rhythmic energy and complex harmonic textures, drawing heavily from the Ewe traditional music of the Volta Region. His works remain staples of the West African choral repertoire.",
        affiliations: [
            "University of Ghana, Legon",
            "National Symphony Orchestra Ghana (Conductor)",
            "Abibigromma"
        ],
        imageUrl: "/smalogo.jpg",
        tags: ["Ghana", "Contemporary", "Choral", "Ewe Tradition"]
    },
    {
        id: "n-z-nayo",
        name: "N.Z. Nayo",
        period: "1922 — 1993",
        description: "A foundational figure in Ghanaian choral and orchestral composition, blending Western counterpoint with indigenous Ghanaian melodies.",
        biography: "Nicholas Zinzendorf Nayo was a renowned Ghanaian composer, music educator, and administrator. He served as the Director of the National Symphony Orchestra of Ghana and the head of the music department at the University of Cape Coast.\n\nHis symphonic works and choral anthems are sophisticated syntheses of classical forms and rich, localized melodic contours.",
        affiliations: [
            "National Symphony Orchestra Ghana (Director)",
            "University of Cape Coast",
            "Achimota School"
        ],
        imageUrl: "/smalogo.jpg",
        tags: ["Ghana", "Orchestral", "Choral", "20th Century"]
    },
    {
        id: "michael-osei-owusu",
        name: "Michael Osei-Owusu",
        period: "1975 — Present",
        description: "A contemporary Ghanaian composer focused on large-scale choral and orchestral works heavily influenced by Highlife and traditional Akan rhythms.",
        biography: "Michael Osei-Owusu is a leading voice in contemporary West African art music. He specializes in creating complex choral works that demand virtuosic vocal techniques while remaining deeply rooted in the Ghanaian Highlife tradition.\n\nHis works are frequently performed by elite choirs across the continent and he is a strong advocate for the academic transcription and preservation of local folk melodies.",
        affiliations: [
            "National Symphony Orchestra Ghana",
            "Ghana National Choir"
        ],
        imageUrl: "/smalogo.jpg",
        tags: ["Ghana", "Contemporary", "Highlife", "Choral"]
    }
];

export const scores: Score[] = [
    {
        id: "1042-S",
        title: "Shosholoza (1940 Edition)",
        subtitle: "Critical Arrangement by Khumalo",
        composerId: "mzilikazi-khumalo",
        price: "$12.50",
        licenseType: "Digital License",
        imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDVaj5-BrwElpfZOzj_VR2BvdiID_vGawXD2sRC9ctHVGVZprm7IyRXmaLZr6Ph6eEGhjZX0cApBmn7VKF8GR6fiHervDPL2WCkXX-xs-AjSgX2DjOClb31-ogF5GdGwcauvpQySXJZSmUU7YK1_fYQCt3gwvvKLp6OyArIMlzrDa_MVnM2Ar1wzSnQQei6JCQoNUzPRuqYBCgkdW_APoRVk18gijvWiNVWur8CGI_gRUUgGSsJsAxFxg7-rrPgsWkg1FuYFjRlNtoL",
        voicing: "SATB div. (A Cappella)",
        language: "isiZulu",
        difficulty: "Advanced (Level 4)",
        duration: "approx. 4:30",
        historicalContext: "This arrangement of the traditional Southern African miners' song 'Shosholoza' represents a critical juncture in the indigenous choral movement. Khumalo's setting preserves the propulsive rhythmic vitality of the original work-song while elevating it through sophisticated counterpoint and expanded harmonic language suitable for the concert stage. The manuscript includes performance notes on authentic pronunciation and choreographic movement."
    },
    {
        id: "1043-S",
        title: "Akhale Noma Ekhala",
        subtitle: "SATB, A Cappella",
        composerId: "mzilikazi-khumalo",
        price: "$10.00",
        licenseType: "Digital",
        imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAYWd2A73JssuL0cM1uK9I5s5Qy2Hl1WzHkxVnOuQoJp9V2yZ1qDqVvL0G7YhF6sE6H2G8zTzJ8KzP6yJ1V2XJ9xG0zL0xQ5L2xG2yP4T9zS5xR8vC5yL8wT4vG6V2wK9M1xJ6T4vG6xR8xL_J5Qh_VjR2L3uKxwO0P",
        voicing: "SATB (A Cappella)",
        language: "isiZulu",
        difficulty: "Intermediate (Level 3)",
        duration: "approx. 3:15",
        historicalContext: "A poignant choral piece illustrating the emotive depth of Zulu vocal traditions. Khumalo masterfully uses dynamic contrast and close harmonies to convey a sense of longing and resilience."
    },
    {
        id: "2011-B",
        title: "Akan Suite",
        subtitle: "J.H. Kwabena Nketia",
        composerId: "j-h-kwabena-nketia",
        price: "$15.00",
        licenseType: "Digital",
        imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuB2yG5yR1yJ9uWvT6jX1xVw8S1wT9H6vL5xW0fC0Jp8H2yZ1qL1VvL0zH5sE4xH1G0mZ1J6KzL4wR1wX1Q2yL0xP2yL2xP5T4uC1wD3uC4xR8vF4vL3wV7vL5wP8xK5T4uC1wD3vL4xI4xH2Qh_VjR7vK6uO1W",
        voicing: "Flute and Piano",
        language: "Instrumental",
        difficulty: "Advanced (Level 4)",
        duration: "approx. 12:00",
        historicalContext: "The Akan Suite translates polyrhythmic structures typically found in Ghanaian drum ensembles into a chamber music setting. The interplay between the flute and piano requires precise timing and an understanding of implicit cross-rhythms."
    },
    {
        id: "4051-A",
        title: "African Suite for String Orchestra",
        subtitle: "Fela Sowande",
        composerId: "fela-sowande",
        price: "$35.00",
        licenseType: "Print & Digital",
        imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDVaj5-BrwElpfZOzj_VR2BvdiID_vGawXD2sRC9ctHVGVZprm7IyRXmaLZr6Ph6eEGhjZX0cApBmn7VKF8GR6fiHervDPL2WCkXX-xs-AjSgX2DjOClb31-ogF5GdGwcauvpQySXJZSmUU7YK1_fYQCt3gwvvKLp6OyArIMlzrDa_MVnM2Ar1wzSnQQei6JCQoNUzPRuqYBCgkdW_APoRVk18gijvWiNVWur8CGI_gRUUgGSsJsAxFxg7-rrPgsWkg1FuYFjRlNtoL",
        voicing: "String Orchestra",
        language: "Instrumental",
        difficulty: "Advanced (Level 5)",
        duration: "approx. 24:00",
        historicalContext: "Composed in 1944, this suite is perhaps Sowande's most famous work. It consists of five movements, three of which are based on popular melodies composed by the Ghanaian musician E. Amu, demonstrating an early pan-African artistic solidarity."
    },
    {
        id: "5022-C",
        title: "Highlife Fantasy",
        subtitle: "Michael Osei-Owusu",
        composerId: "michael-osei-owusu",
        price: "$18.00",
        licenseType: "Digital",
        imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAFTL3tBZy6yVwL3f9jQ0tVw5Qy3tLvw2SxF9uT3QyJp3vH6zWqV1Q3GvL0zH6sE6H0G2mZ1J8KzP6wX9xV0Q0yL0xP9L2vT4vN1nN1T9xR8vC3vG6V2wL4M1xL6T4vG6xR8xK_I5Qh_VjR2L3uKxwO1T",
        voicing: "TTBB and Percussion",
        language: "Twi",
        difficulty: "Intermediate (Level 3)",
        duration: "approx. 5:45",
        historicalContext: "A contemporary exploration of the Golden Age of Ghanaian Highlife. The arranged percussion parts provide a strict ostinato over which the male voices weave complex, syncopated melodies reminisce of 1960s dance bands."
    },
    {
        id: "7011-A",
        title: "Yen Ara Asase Ni",
        subtitle: "Ghana's Unofficial National Anthem",
        composerId: "ephraim-amu",
        price: "$10.00",
        licenseType: "Digital License",
        imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAxN2geDnh9EYIo2sYfCiRxSw0tL2Cj_T_MK2mKbSKKP-PVP4Fx-zmWSavV32XNv9otcu2pQgL1r6hQuKt5hDClp2aWX338RgC7W_mucsh3dxWvSDBjc-fuIPCBPj2p1yK973aAhv0vGBXSKdVTMSJsBU0j_XGHaF6KdogvfXJRqzSDgM7OaX075k6jfHYeCfSd3eFLjsMhiC8Lr8IkDDhnM1ERMe9sJ1vRvgG6TNZkbU0p7gfdBJM4SGNnbDWNRWCubBp2e1jZfhBx",
        voicing: "SATB (A Cappella)",
        language: "Twi",
        difficulty: "Intermediate (Level 3)",
        duration: "approx. 2:30",
        historicalContext: "Originally composed in 1929, this patriotic song translates to 'This Is Our Own Land.' It serves as a powerful expression of national pride and unity in Ghana. Amu's composition masterfully employs traditional Akan rhythms combined with four-part Western choral harmony."
    },
    {
        id: "7012-A",
        title: "Asem Yi Di Ka",
        subtitle: "Historical Choral Masterpiece",
        composerId: "ephraim-amu",
        price: "$14.50",
        licenseType: "Print & Digital",
        imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAYWd2A73JssuL0cM1uK9I5s5Qy2Hl1WzHkxVnOuQoJp9V2yZ1qDqVvL0G7YhF6sE6H2G8zTzJ8KzP6yJ1V2XJ9xG0zL0xQ5L2xG2yP4T9zS5xR8vC5yL8wT4vG6V2wK9M1xJ6T4vG6xR8xL_J5Qh_VjR2L3uKxwO0P",
        voicing: "SATB (A Cappella)",
        language: "Twi",
        difficulty: "Advanced (Level 4)",
        duration: "approx. 3:45",
        historicalContext: "Translating to 'This Matter Must Be Said', this work is a seminal example of Amu's integration of speech-contour melodies into choral polyphony. The rhythmic complexity challenges modern choirs to balance indigenous speech-driven syncopation with strict choral discipline."
    },
    {
        id: "8023-K",
        title: "Mida Akpe",
        subtitle: "Praise Anthems Series",
        composerId: "kenn-kafui",
        price: "$12.00",
        licenseType: "Digital License",
        imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDmd6V0GP4UY36s8LkK5oF8wwSNfkSqJ0Vt-GjVasHGOo_4xp96-J7ia8mwrXRduxYUDA8VcuI3P4UVwImnK7Sfe76QOy69TkGTMjC4pnFDLGAj7Zh80pD9tTDZBExcmksCMSiZ6zx6GeHLbXwFkP99zuYkEpX82xi83juneGK-aYFl_m9AXqK-P-_MxOubosJPMuHekNEysdWwmabBJWfN8xQRZKE0GQMSVJ2XgoZsmezmLoxn3KuE4zG3BCdYtX08O36VdFIIjuJh",
        voicing: "SATB with Traditional Percussion",
        language: "Ewe",
        difficulty: "Advanced (Level 4)",
        duration: "approx. 4:10",
        historicalContext: "A vibrant work of thanksgiving ('Let us give thanks'). Kafui meticulously scores Ewe drum ostinatos beneath a soaring, rhythmic choral texture, demonstrating his prowess in synthesizing ethnic instrumental forms with majestic vocal arrangements."
    },
    {
        id: "9041-N",
        title: "Mitso Dzidzor",
        subtitle: "Rejoice in the Lord",
        composerId: "n-z-nayo",
        price: "$11.00",
        licenseType: "Digital License",
        imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCvvKeTNKNG_fTzN_QCeoLz1iVAVhGWk8H0-Vu3Vq0kHQuRl5Lm-CGPQs7VKCH4v95gx8WiHLGVFy_ABKtrfeIYUvJ-QBlYxGvhqYp7dfmip_61DkACC9qYtFk6GpnO-O78mHrtBvu3SzPIVmGIsq-ID7hyGONxb10CBtSP30y4quPgVZN8QIkyFk2tYDkxZjAshD84nFcRbyI0l3XzOgMioOXUnihdfygQJ1F63KdypyeCAtNxRqnO01oEYpOC1KJomBgzZXQa2-OY",
        voicing: "SATB (A Cappella)",
        language: "Ewe",
        difficulty: "Intermediate (Level 3)",
        duration: "approx. 3:20",
        historicalContext: "A jubilant anthem characteristic of Nayo's mature period. The piece marries contrapuntal imitation typical of Western classical training with the distinct call-and-response structures and harmonic language native to his Ghanaian roots."
    }
];

// Helper functions to get data
export function getComposer(id: string): Composer | undefined {
    return composers.find(c => c.id === id);
}

export function getScoresByComposer(composerId: string): Score[] {
    return scores.filter(s => s.composerId === composerId);
}

export function getScore(id: string): Score | undefined {
    return scores.find(s => s.id === id);
}

export function getRelatedScores(scoreId: string): Score[] {
    const currentScore = getScore(scoreId);
    if (!currentScore) return [];
    // Just return other scores by the same composer or random scores for mock purposes
    const related = scores.filter(s => s.id !== scoreId);
    return related.slice(0, 4);
}
