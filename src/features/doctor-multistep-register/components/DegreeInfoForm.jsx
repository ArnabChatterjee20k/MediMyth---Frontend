import Input from "./Input"
import SelectCategory from "./SelectCategory"
import VisibilitySelector from "./VisibilitySelector"
import useCategories from "../../../services/useCategories"

const DegreeInfoForm = () => {
  const {isLoading,data} = useCategories()
  if(isLoading) return <h1>Loading....</h1>
  return (
    <>
        <Input name={"reg_no"} type="text" placeholder="Enter your registration number" label="Registration Number"/>
        <VisibilitySelector contextField={"reg_no_visibility"}/>
        <Input name={"address"} type="text" placeholder="Enter your proper address" label="Address"/>
        <SelectCategory categories={data}/>
        <Input name={"reff_code"} type="text" placeholder="Refferal Code(if provided by admin)" label="Refferal Code" optional={true}/>
    </>
  )
}

export default DegreeInfoForm