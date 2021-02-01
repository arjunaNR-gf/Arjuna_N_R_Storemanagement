export default function vali(valuess)
{
    let error={}

    if(!valuess.Name.trim())
    {
        error.Name="USER NAME REQUIRED"
    }

    if(!valuess.Email)
    {
        error.Email="USER NAME REQUIRED"
    }
    
    if(!valuess.password){
        error.password="passwoord required"
    }

}