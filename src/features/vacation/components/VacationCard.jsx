import EditCards from "../../../components/ui/EditCards";

export default function VacationCard({id, header, subHeader, content,options}) {
  return <EditCards id={id} header={header} subHeader={subHeader} content={content} options={options}/>
}
