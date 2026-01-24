import { 
  ScanEye, 
  Maximize, 
  ScanBarcode, 
  Layers, 
  Camera, 
  Lightbulb, 
  Cpu, 
  BrainCircuit, 
  Grid3X3 
} from "lucide-react";

export const MANUFACTURING_QUALITY_DATA = {
  header: {
    title: "Quality Management & Inspection Automation",
    subTitle: "Computer Vision Quality Inspection",
    introTitle: "AI-Powered Automated Visual Inspection",
    description: "Replace inconsistent, slow, and error-prone manual inspection with computer vision systems delivering superhuman accuracy, 100% inspection speed, and comprehensive documentation"
  },
  applications: {
    title: "Inspection Applications",
    categories: [
      {
        title: "Defect Detection",
        icon: ScanEye,
        color: "blue",
        items: [
          "Surface Defects: Scratches, dents, cracks, discoloration, rust, contamination, pitting",
          "Assembly Errors: Missing components, incorrect parts, wrong orientation, improper insertion",
          "Labeling Issues: Missing labels, incorrect text, misaligned labels, illegible print, wrong language",
          "Packaging Defects: Damaged packaging, incorrect packaging, foreign objects, seal integrity"
        ]
      },
      {
        title: "Dimensional Measurement",
        icon: Maximize,
        color: "green",
        items: [
          "Length, width, height, diameter measurement to micron accuracy",
          "Verify critical dimensions within tolerance",
          "Hole position and diameter verification",
          "Thread inspection (pitch, depth)",
          "Gap and flush measurements",
          "Radius and contour measurement"
        ]
      },
      {
        title: "Print Inspection",
        icon: ScanBarcode,
        color: "blue",
        items: [
          "OCR (Optical Character Recognition) for serial numbers, lot codes, expiration dates",
          "Barcode and QR code verification (readable, correct data)",
          "Label presence and position",
          "Text quality and legibility",
          "Printing defects (smudges, missing characters)"
        ]
      },
      {
        title: "Surface Finish",
        icon: Layers,
        color: "green",
        items: [
          "Paint quality inspection (orange peel, runs, sags, missed spots)",
          "Coating uniformity and coverage",
          "Polish and gloss level measurement",
          "Surface roughness assessment"
        ]
      }
    ]
  },
  techStack: {
    title: "Technology Stack",
    columns: [
      {
        title: "Cameras & Optics",
        icon: Camera,
        items: [
          "High-resolution industrial cameras (5-20 megapixel typical, up to 100MP for demanding applications)",
          "Area scan cameras for stationary inspection",
          "Line scan cameras for continuous web inspection (paper, film, textiles)",
          "3D cameras (structured light, laser triangulation, stereo vision) for dimensional measurement",
          "Color cameras for color-sensitive inspection",
          "Infrared/thermal cameras for specialized applications"
        ]
      },
      {
        title: "Lighting",
        icon: Lightbulb,
        items: [
          "Critical for consistent imaging (80% of vision success is proper lighting)",
          "LED ring lights, backlight, dome lights, dark field, structured light",
          "Strobed lighting for moving parts (freeze motion)",
          "Multi-angle lighting to reveal surface defects",
          "Polarized lighting to reduce glare"
        ]
      },
      {
        title: "Image Processing Hardware",
        icon: Cpu,
        items: [
          "Industrial PCs with GPU acceleration (NVIDIA for deep learning)",
          "Embedded vision systems (NVIDIA Jetson for edge inference)",
          "Smart cameras (processing integrated into camera)",
          "FPGA-based processing for ultra-high-speed inspection"
        ]
      }
    ]
  },
  software: {
    title: "Software & Algorithms",
    sections: [
      {
        title: "Deep Learning",
        icon: BrainCircuit,
        theme: "blue",
        items: [
          "Convolutional Neural Networks (CNN) for image classification and defect detection",
          "Transfer learning from pre-trained models (ImageNet, ResNet, VGG)",
          "Custom architectures optimized for manufacturing inspection",
          "Training datasets: 1,000 - 50,000 images per defect class",
          "Data augmentation (rotation, scaling, brightness, blur) to increase dataset size"
        ]
      },
      {
        title: "Classical Computer Vision",
        icon: Grid3X3,
        theme: "green",
        items: [
          "Pattern matching (template matching, feature matching)",
          "Edge detection (Canny, Sobel) for part location and dimensional measurement",
          "Blob analysis (count, size, shape features of connected regions)",
          "Color analysis (hue, saturation, value distribution)",
          "Morphological operations (erosion, dilation, opening, closing)"
        ]
      }
    ]
  }
};