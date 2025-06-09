import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Replace with your own imports
import gallery1 from "./gallery1.jpg";
import gallery2 from "./gallery2.jpg";
import gallery3 from "./gallery3.jpg";
import gallery4 from "./gallery4.jpg";
import gallery5 from "./gallery5.jpg";
import gallery6 from "./gallery6.jpg";

const galleryItems = [
  { id: 1, src: gallery1, categories: ["Web-design", "Web-development"] },
  { id: 2, src: gallery2, categories: ["Web-design", "Brand"] },
  { id: 3, src: gallery3, categories: ["Brand"] },
  { id: 4, src: gallery4, categories: ["Web-design"] },
  { id: 5, src: gallery5, categories: ["Web-design"] },
  { id: 6, src: gallery6, categories: ["Web-design", "Brand"] },
];

const filters = ["All", "Web-design", "Web-development", "Brand"];

const Gallery = () => {
  const [selectedFilter, setSelectedFilter] = useState("All");

  const filteredItems =
    selectedFilter === "All"
      ? galleryItems
      : galleryItems.filter(item => item.categories.includes(selectedFilter));

  return (
    <section className="our-gallery-area page-paddings">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <div className="E-section-title">
              <h2>Our Gallery</h2>
              <p>
                If you are going to use a passage of text, make sure it’s not
                embarrassing.
              </p>
            </div>
          </div>
        </div>

        {/* Filter Buttons */}
        <div className="row">
          <div className="col-12">
            <div className="filters filter-button-group">
              <ul style={{listStyle: "none" }}>
                {filters.map(filter => (
                  <li
                    key={filter}
                    className={`list ${selectedFilter === filter ? "active" : ""}`}
                    onClick={() => setSelectedFilter(filter)}
                    style={{
                      cursor: "pointer",
                      fontWeight: selectedFilter === filter ? "bold" : "normal",
                    }}
                  >
                    {filter.replace("-", " ")}
                  </li>
                ))}
              </ul>
            </div>

            {/* Gallery Items */}
            <motion.div
              layout
              className="content grid"
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "20px",
                justifyContent: "center",
              }}
            >
              <AnimatePresence>
                {filteredItems.map(item => (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.4 }}
                    className="single-content itemBox grid-item wow"
                    style={{
                      width: "30%",
                      minWidth: "250px",
                      borderRadius: "10px",
                      overflow: "hidden",
                    }}
                  >
                    <div className="single-content-box">
                      <img
                        className="p2"
                        src={item.src}
                        alt={`gallery-${item.id}`}
                        style={{ width: "100%", objectFit: "cover", borderRadius: "10px" }}
                      />
                      <div className="single-description">
                        <div className="gallery-ico" style={{ textAlign: "center", marginTop: "10px" }}>
                          <i className="fa-solid fa-images"></i>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
