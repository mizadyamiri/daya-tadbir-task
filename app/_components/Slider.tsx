"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Box, Container, Button } from "@mui/material";
import ArrowBackIosOutlinedIcon from "@mui/icons-material/ArrowBackIosOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import samsngMonitorImage from "@/public/images/samsung-monitor.jpg";
import wdHDDImage from "@/public/images/wd-hard.jpg";
import spSSDImage from "@/public/images/sp-ssd.jpg";
// 14 9  11
const Images = [
  { imageData: samsngMonitorImage, id: 14 },
  { imageData: wdHDDImage, id: 9 },
  { imageData: spSSDImage, id: 11 },
];

const buttonsSharedStyles = {
  ":hover": { bgcolor: "#11111147" },
  position: "absolute",
  top: "0",
  bottom: "0",
  borderRadius: "16px",
};

export default function Slider() {
  const [imageIndex, setImageIndex] = useState(0);

  function handleNextImage() {
    setImageIndex(i => {
      if (i === Images.length - 1) return 0;
      return i + 1;
    });
  }

  function handlePrevImage() {
    setImageIndex(i => {
      if (i === 0) return Images.length - 1;
      return i - 1;
    });
  }

  useEffect(() => {
    const id = setTimeout(handleNextImage, 5000);

    return () => clearTimeout(id);
  }, [imageIndex]);

  return (
    <Container maxWidth='lg' sx={{ padding: { lg: "0px !important" }, my: 6 }}>
      <Box
        sx={{
          width: 1,
          aspectRatio: "16 / 9",
          position: "relative",
        }}
      >
        <Box sx={{ display: "flex", width: 1, height: 1, overflow: "hidden" }}>
          {Images.map(img => (
            <Link
              href={`/products/${img.id}`}
              key={img.imageData.src}
              style={{
                transition: "translate 300ms ease-out",
                translate: `${100 * imageIndex}%`,
                flexShrink: 0,
                flexGrow: 0,
              }}
            >
              <Image
                style={{
                  width: "100%",
                  height: "100%",
                }}
                objectFit='contain'
                src={img.imageData}
                placeholder='blur'
                alt=''
              />
            </Link>
          ))}
        </Box>

        <Button sx={{ ...buttonsSharedStyles, left: "0" }} onClick={handlePrevImage}>
          <ArrowBackIosOutlinedIcon fontSize='small' />
        </Button>
        <Button sx={{ ...buttonsSharedStyles, right: "0" }} onClick={handleNextImage}>
          <ArrowForwardIosOutlinedIcon fontSize='small' />
        </Button>
      </Box>
    </Container>
  );
}
