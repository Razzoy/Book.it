import { FormCard } from "../components/FormCard/FormCard";
import { FormInput } from "../components/FormCard/FormInput/FormInput";
import FormTextarea from "../components/FormCard/FormInput/FormTextarea";

export function AddEvent(AddEvent = () => { }) {
  return (
    <FormCard pageTitle={`Add event`} action={AddEvent} bTitle={"Add"}>
      <FormInput type={"text"} id={"title"} label={"Title"} src={"edit.png"} />
      <FormInput type={"text"} id={"location"} label={"Location"} src={"map.png"} />
      <FormInput type={"url"} id={"imageURL"} label={"Image URL"} src={"image.png"} />
      <FormInput type={"text"} id={"time"} label={"Time"} src={"clock.png"} />
      <FormInput type={"text"} id={"date"} label={"Date"} src={"calendar.png"} />
      <FormTextarea />
    </FormCard>
  )
}
