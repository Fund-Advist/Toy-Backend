import express from "express";
import controller from "../controllers/diary";

const router = express.Router();

router.post('/create/diary', controller.createDiary);
router.get('/get/diarys', controller.getAllDiarys);

export = router;