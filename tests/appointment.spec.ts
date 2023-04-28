import { expect, test} from "vitest"
import { Appointment } from "../src/entities/appointment"

test("Create an appointment test", () => {
    const appointment = new Appointment({
        customer: "Jhon Doe",
        startsAt: new Date(),
        endsAt: new Date()
    });

    expect(appointment).toBeInstanceOf(Appointment);
    expect(appointment.customer).toEqual("Jhon Doe");
})