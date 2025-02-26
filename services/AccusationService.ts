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

export async function AccusationUpdate (id: number, accusation : Accusation) {
  try {
    const accusationUpdate = await prisma.accusation.update({
      where : {accusationId : id},
      data : {
        reportType : accusation.reportType,
        guestId : accusation.guestId,
        description : accusation.description
      }
    })
    console.log("Accusation Added: ", accusationUpdate);
  } catch (error) {
    console.log("Error Updatin Accusation: ", error);
  }
}

export async function AccusationDelete(id:number) {
  try {
    await prisma.accusation.delete({
      where : {accusationId : id}
    })
    console.log("Deleted Accusation: ", id);
  } catch (error) {
    console.log("Error Delete Accusation: ", error);
  }
}

export async function AccusationGetAll() {
  try {
    return await prisma.accusation.findMany();
  } catch(error) {
    console.log("Error Geting Accusation", error);
  }
}