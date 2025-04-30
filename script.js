document.addEventListener("DOMContentLoaded", () => {
    const keyIcon = document.getElementById("key-icon");
    const infoIcon = document.getElementById("info-icon");

    const infoImageContainer = document.getElementById("info-image-container");
    const infoTextContainer = document.getElementById("info-text-container");

    keyIcon.addEventListener("click", () => {
        infoImageContainer.style.display =
            infoImageContainer.style.display === "none" || infoImageContainer.style.display === ""
                ? "block"
                : "none";
    });

    infoIcon.addEventListener("click", () => {
        infoTextContainer.style.display =
            infoTextContainer.style.display === "none" || infoTextContainer.style.display === ""
                ? "block"
                : "none";
    });
});


// ALL FOR APPEARING IMAGES 

const yearBoxes = document.querySelectorAll('.year-box');
const hoverImageContainer = document.getElementById('hover-image-container');
const hoverImage = document.getElementById('hover-image');

// Map years to image paths
const yearImages = {
  1440: "images/1440.png",
  1837: "images/1837.jpg",
  1851: "images/1851.jpg",
  1861: "images/1861.png",
  1867: "images/1867.png",
  1896: "images/1896.jpg",
  1897: "images/1897.jpg",
  1900: "images/1900.png",
  1901: "images/1901.jpg",
  1905: "images/1905.png",
  1908: "images/1908.jpg",
  1910: "images/1910.png",
  1919: "images/1919.jpg",
  1935: "images/1935.png",
  1970: "images/1970.jpg",
  1976: "images/1976.png",
  1980: "images/1980.png",
  1996: "images/1996.png",
  2001: "images/2001.png",
  // ... continue mapping for each year
  2025: "images/2025.png"
};

const textInfoContainer = document.getElementById('text-info-container');
const textTitle = document.getElementById('text-title');
const textBody = document.getElementById('text-body');

const yearTextInfo = {
  1851: {
    title: "First issue of The New York Times",
    titleColor: "#FDD1F0",
    body: `A scanned front page of the first issue of The New-York Daily Times, dated September 18, 1851.

The layout is densely packed with small serif text in narrow columns, featuring no images. Headlines are minimal, and articles begin directly on the front page.

The masthead is ornate, displaying the newspaper’s original name in a bold, classic typeface reflective of 19th-century print design.`
  },

  1861: {
    title: "First Illustration in The New York Times",
    titleColor: "#FDD1F0",
    body: `The first illustration ever published in The New York Times appeared in 1861, during the early months of the Civil War. This historic image was a wood engraving depicting the battlefront, marking a significant shift in journalism by visually enhancing the written word. At a time when photography was still emerging and difficult to reproduce in print, illustrations like this brought immediacy and emotional impact to the news.`
  },

  1867: {
    title: "First Issue of Harper's Bazar",
    titleColor: "#FBB274",
    body: `The first issue of Harper's Bazar was published on November 2, 1867, introducing American readers to a weekly magazine devoted to fashion, culture, and the domestic arts. Aimed primarily at women, the publication offered a sophisticated blend of European fashion plates, household advice, serialized fiction, and social commentary. Published by Harper & Brothers, it quickly distinguished itself with its elegant illustrations and editorial tone that combined refinement with practical guidance. This debut marked a significant moment in American publishing, shaping women’s media for generations to come.`
  },

  1905: {
    title: "First Photo in The New York Times",
    titleColor: "#FDD1F0",
    body: `The first photograph ever published in The New York Times appeared on June 8, 1905, marking a pivotal moment in the history of journalism. The image, a stark contrast to the paper's traditionally text-heavy layout, was of a train wreck in Ohio, highlighting the paper’s growing interest in incorporating visuals to complement its news coverage. This photograph not only represented a technological advancement but also set the stage for photojournalism’s increasing role in modern newspapers, offering readers a more immediate and impactful way to engage with current events.`
  },

  1910: {
    title: "Back to 8-column TNYT",
    titleColor: "#FDD1F0",
    body: `In the 1910s, The New York Times transitioned to an 8-column format, a design change aimed at maximizing content density while enhancing the paper’s overall efficiency. This shift allowed for more stories to be included on each page, accommodating the growing demand for detailed news coverage. The 8-column layout improved the organization of content, making it easier for readers to navigate and absorb information.`
  },

  1935: {
    title: "Photography in TNYT",
    titleColor: "#FDD1F0",
    body: `The New York Times began incorporating photography more prominently, shifting the balance of text and image to create a more visually engaging experience for its readers. This change reflected the growing influence of photojournalism, as the paper recognized the power of images to convey complex stories and evoke emotional responses. By integrating photographs alongside articles, The Times enhanced its storytelling, offering readers a richer, more immersive way to engage with the news. This shift marked a turning point in newspaper design, setting the stage for the greater visual emphasis seen in modern journalism.`
  },

  1970: {
    title: "Guy Bourdin’s Stylistic Photography",
    titleColor: "#FDF69C",
    body: `Guy Bourdin’s  images epitomize the era’s visual storytelling  — vibrant, surreal compositions challenging traditional advertising aesthetics.`
  },

  1976: {
    title: "Back to 6-column TNYT",
    titleColor: "#FDD1F0",
    body: `In 1976, The New York Times made a significant design shift by switching from its traditional 8-column format to a 6-column layout. This change allowed for a more spacious and flexible page design, enhancing the readability and visual appeal of the newspaper. The reduction in columns provided more room for larger images, advertisements, and improved headline placement, giving the paper a cleaner, more modern look. This transition was part of a broader trend in newspaper design, reflecting the growing importance of visual storytelling and reader engagement in the late 20th century.`
  },

  1980: {
    title: "TNYT shifts from hand-set type to digital typesetting",
    titleColor: "#FDD1F0",
    body: `In 1980, The New York Times made a groundbreaking shift from hand-set type to digital typesetting, marking a major advancement in newspaper production. This transition to digital technology streamlined the printing process, allowing for faster production times, greater accuracy, and more flexibility in layout design. It also paved the way for more sophisticated typographic choices and improved editorial control. The move to digital typesetting represented a significant milestone in the modernization of the newspaper industry, enabling The Times to keep pace with evolving technological innovations in publishing.`
  },

  1996: {
    title: "TNYT Launches Its First Website",
    titleColor: "#FDD1F0",
    body: `The early web version was visually cluttered, mimicking print but squeezed into a screen format. Fonts were inconsistent, pages were packed with links and headlines—a digital abundance of navigation and noise.3. Design was function-first, reflecting the awkward growing pains of moving print ideas into digital formats.`
  },

  2001: {
    title: "TNYT Breaking News Reporting",
    titleColor: "#FDD1F0",
    body: `The Times website became vastly more responsive to breaking news than its original iterations -- and if necessary, scrapped its homepage clutter when major news erupted.`
  },

  2025: {
    title: "TNYT Current Website (2025)",
    titleColor: "#FDD1F0",
    body: `The current design of The New York Times website feels thoughtful and human-centered, balancing dense information with clarity and visual ease. Its use of clean typography, generous spacing, and subtle grid structures creates an experience that’s both readable and refined. What stands out is how seamlessly it blends storytelling with interactive and visual elements—something I’m also trying to achieve in my project.`
  },
  
};

let activeYear = null; // place this above the loop

yearBoxes.forEach(box => {
  const year = box.textContent.trim();

  box.addEventListener("mouseenter", () => {
    if (yearImages[year]) {
      hoverImage.src = yearImages[year];
      hoverImageContainer.style.display = "block";
    }
  });

  box.addEventListener("mouseleave", () => {
    hoverImageContainer.style.display = "none";
    hoverImage.src = "";
  });

  box.addEventListener("click", () => {
    if (activeYear === year) {
      // If same year clicked again, hide the text
      textInfoContainer.style.display = "none";
      activeYear = null;
    } else if (yearTextInfo[year]) {
      // Show new year info
      textTitle.textContent = yearTextInfo[year].title;
      textTitle.style.color = yearTextInfo[year].titleColor;


      textBody.textContent = yearTextInfo[year].body;
      textInfoContainer.style.display = "block";
      activeYear = year;
    } else {
      textInfoContainer.style.display = "none";
      activeYear = null;
    }
  });
});

