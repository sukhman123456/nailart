import fs from "node:fs";
import path from "node:path";

const BRAIN_DIR = "C:\\Users\\hp\\.gemini\\antigravity-ide\\brain\\67f0460a-5d47-4e6d-af12-5c932f20b3f1";
const TARGET_DIR = path.resolve(process.cwd(), "src/assets/services");

if (!fs.existsSync(TARGET_DIR)) {
  fs.mkdirSync(TARGET_DIR, { recursive: true });
}

// Copy master hero image from current conversation uploads
const CURRENT_BRAIN_DIR = "C:\\Users\\hp\\.gemini\\antigravity-ide\\brain\\920edeb4-ee37-49c8-b759-56db94d6bb42";
const masterHeroSrc = path.join(CURRENT_BRAIN_DIR, ".user_uploaded", "media_1791366564292.jpg");
const masterHeroDest = path.resolve(process.cwd(), "src/assets/nails-master-hero.jpg");
if (fs.existsSync(masterHeroSrc)) {
  try {
    fs.copyFileSync(masterHeroSrc, masterHeroDest);
    console.log(`[sync-service-images] Successfully synced nails-master-hero.jpg`);
  } catch (e) {
    console.error("Failed to copy master hero image:", e);
  }
}

// Copy mobile portrait hero image
const mobileHeroSrc = path.join(CURRENT_BRAIN_DIR, "nails_hero_mobile_1791368897016.jpg");
const mobileHeroDest = path.resolve(process.cwd(), "src/assets/nails-master-hero-mobile.jpg");
if (fs.existsSync(mobileHeroSrc)) {
  try {
    fs.copyFileSync(mobileHeroSrc, mobileHeroDest);
    console.log(`[sync-service-images] Successfully synced nails-master-hero-mobile.jpg`);
  } catch (e) {
    console.error("Failed to copy mobile hero image:", e);
  }
}

// 1. Copy generated images from brain dir
const generatedMap: Record<string, string> = {
  "manicure.jpg": "service_manicure_1791187874993.jpg",
  "acrylic-nails.jpg": "acrylic_nails_1791187923094.jpg",
  "eyelash-extensions.jpg": "eyelash_extensions_1791188008984.jpg",
  "french-manicure.jpg": "french_manicure_1791188031188.jpg",
  "gel-manicure.jpg": "gel_manicure_1791188053972.jpg",
  "nail-art.jpg": "nail_art_1791188076696.jpg",
  "pedicure.jpg": "pedicure_1791188099181.jpg",
  "stiletto-nails.jpg": "stiletto_nails_1791188118675.jpg",
};

for (const [targetName, brainName] of Object.entries(generatedMap)) {
  const dest = path.join(TARGET_DIR, targetName);
  const src = path.join(BRAIN_DIR, brainName);
  if (!fs.existsSync(dest) && fs.existsSync(src)) {
    try {
      fs.copyFileSync(src, dest);
      console.log(`[sync-service-images] Copied ${brainName} -> ${targetName}`);
    } catch (e) {
      console.error(`Failed to copy ${brainName}:`, e);
    }
  }
}


// 1b. Copy real academy images from .user_uploaded dir
const ACADEMY_TARGET_DIR = path.resolve(process.cwd(), "src/assets/academy");
if (!fs.existsSync(ACADEMY_TARGET_DIR)) {
  fs.mkdirSync(ACADEMY_TARGET_DIR, { recursive: true });
}

const USER_UPLOADED_DIR = path.join(BRAIN_DIR, ".user_uploaded");
const academyMap: Record<string, string> = {
  "academy-student-1.jpg": "media_1791189521822.jpg",
  "academy-student-2.jpg": "media_1791189539531.jpg",
  "academy-students-group-small.jpg": "media_1791189545404.jpg",
  "academy-students-group-large.jpg": "media_1791189550772.jpg",
};

for (const [targetName, uploadedName] of Object.entries(academyMap)) {
  const dest = path.join(ACADEMY_TARGET_DIR, targetName);
  const src = path.join(USER_UPLOADED_DIR, uploadedName);
  if (!fs.existsSync(dest) && fs.existsSync(src)) {
    try {
      fs.copyFileSync(src, dest);
      console.log(`[sync-service-images] Copied real academy photo ${uploadedName} -> ${targetName}`);
    } catch (e) {
      console.error(`Failed to copy academy photo ${uploadedName}:`, e);
    }
  }
}


// 2. Download or fallback remote editorial images
const remoteMap: Record<string, string> = {
  "nail-cut-filing.jpg": "https://images.unsplash.com/photo-1522337094846-8a818192de1f?w=1000&auto=format&fit=crop&q=80",
  "nail-designs.jpg": "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=1000&auto=format&fit=crop&q=80",
  "nail-extensions.jpg": "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=1000&auto=format&fit=crop&q=80",
  "nail-painting.jpg": "https://images.unsplash.com/photo-1506152983158-b4a74a01c721?w=1000&auto=format&fit=crop&q=80",
  "nail-polish-changes.jpg": "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=1000&auto=format&fit=crop&q=80",
  "nail-repair.jpg": "https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?w=1000&auto=format&fit=crop&q=80",
  "polish-removal.jpg": "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?w=1000&auto=format&fit=crop&q=80",
  "sculpted-nails.jpg": "https://images.unsplash.com/photo-1632345031435-8727f6897d53?w=1000&auto=format&fit=crop&q=80",
  "spa-services.jpg": "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=1000&auto=format&fit=crop&q=80",
  "waterless-pedicures.jpg": "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=1000&auto=format&fit=crop&q=80",
};

// Also gallery and collage extra images
const extraMap: Record<string, string> = {
  "gallery-4.jpg": "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?w=1000&auto=format&fit=crop&q=80",
  "gallery-5.jpg": "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1000&auto=format&fit=crop&q=80",
  "gallery-6.jpg": "https://images.unsplash.com/photo-1583001931096-959e9a1a6223?w=1000&auto=format&fit=crop&q=80",
  "insta-1.jpg": "https://images.unsplash.com/photo-1632345031435-8727f6897d53?w=600&auto=format&fit=crop&q=80",
  "insta-2.jpg": "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=600&auto=format&fit=crop&q=80",
  "insta-3.jpg": "https://images.unsplash.com/photo-1599940824399-b87987ceb72a?w=600&auto=format&fit=crop&q=80",
  "insta-4.jpg": "https://images.unsplash.com/photo-1522337094846-8a818192de1f?w=600&auto=format&fit=crop&q=80",
};

async function syncAll() {
  const allDownloads = { ...remoteMap, ...extraMap };
  for (const [filename, url] of Object.entries(allDownloads)) {
    const dest = path.join(TARGET_DIR, filename);
    if (!fs.existsSync(dest)) {
      try {
        const res = await fetch(url);
        if (res.ok) {
          const buffer = Buffer.from(await res.arrayBuffer());
          fs.writeFileSync(dest, buffer);
          console.log(`[sync-service-images] Downloaded ${filename}`);
        } else {
          fallbackLocal(dest);
        }
      } catch (err) {
        console.warn(`[sync-service-images] Could not fetch ${url}, using local fallback:`, err);
        fallbackLocal(dest);
      }
    }
  }
}

function fallbackLocal(dest: string) {
  if (fs.existsSync(dest)) return;
  const fallbackSrc = path.resolve(process.cwd(), "src/assets/nails-gallery-1.jpg");
  if (fs.existsSync(fallbackSrc)) {
    fs.copyFileSync(fallbackSrc, dest);
    console.log(`[sync-service-images] Created fallback for ${path.basename(dest)}`);
  }
}

syncAll().catch((err) => console.error("syncAll failed:", err));
