import express from "express";

const router = express();

router.get("/", (_req, res) => {
  res.send("fetching all entry diaries");
});

router.post("/", (_req, res) => {
  res.send("Saving a diary");
});

export default router;
