import express from 'express';
import { Event } from '../model/Event';
import { eventAdd, eventDelete, eventgetAll, eventUpdate } from '../services/EventService';

const router = express.Router();

exports.saveEvent = async (req : any, res : any) => {
  const event = req.body;
  console.log("Event: ", event);

  try {
    const addEvent = await eventAdd(event);
    res.send(200).json(addEvent);
  } catch (error) {
    console.error("Erro Adding Event: ", error);
  }
};

exports.updateEvent = async (req : any, res : any) => {
  const id  = Number(req.params.id);
  console.log("Event Id For Update: ", id);
  const event : Event = req.body;

  try {
    await eventUpdate(id, event);
    res.send("Event Updated");
  } catch (error) {
    console.log("Error Update Event: ", error);
  }
};

exports.deleteEvent = async (req : any, res : any) => {
  const id = Number(req.params.id);

  try {
    await eventDelete(id);
    res.send("Event Deleted");
  } catch (error) {
    console.log("Error Delete Event: ", error);
  }
};

exports.getAllEvent = async (req : any, res : any) => {
  try {
    const event = await eventgetAll();
    console.log(res.json(event));
  } catch (error) {
    console.log("Error Getting Event: ", error);
  }
};

export default router;