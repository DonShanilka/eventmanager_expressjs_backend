import { prisma } from "../db/Prisma_data_storage";
import { Event } from "../model/Event";

export async function eventAdd(event : Event) {
  try {
    const newEvent = await prisma.eventData.create({
      data: {
        eventName : event.eventName,
        eventDate : event.eventDate,
        location : event.location,
        description : event.description,
        price : event.price,
        mobile : event.mobile,
        organizerEmail : event.organizerEmail
      }
    })
    console.log("Event Added: ", newEvent)
  } catch (error) {
    console.log("Error Adding Event ", error);
  }
}

export async function eventUpdate (id: number, event : Event) {
  try {
    const accusationUpdate = await prisma.eventData.update({
      where : {eventId : id},
      data : {
        eventName : event.eventName,
        eventDate : event.eventDate,
        location : event.location,
        description : event.description,
        price : event.price,
        mobile : event.mobile,
        organizerEmail : event.organizerEmail
      }
    })
    console.log("Event Added: ", accusationUpdate);
  } catch (error) {
    console.log("Error Updatin Event: ", error);
  }
}

export async function eventDelete(id:number) {
  try {
    await prisma.eventData.delete({
      where : {eventId : id}
    })
    console.log("Deleted Event: ", id);
  } catch (error) {
    console.log("Error Delete Event: ", error);
  }
}

export async function eventgetAll() {
  try {
    return await prisma.eventData.findMany();
  } catch(error) {
    console.log("Error Geting Event", error);
  }
}