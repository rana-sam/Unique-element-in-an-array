let array=[1,0,2,3,1,2,4,5,68,4,9]
let repeat;
for(var i=0;i<array.length;i++)
{
    let count=0;
    for(var j=i+1;j<array.length;j++)
    {
        if(array[i]==array[j])
        {
            array.splice(j,1)
            count=count+1;
        }
    }
    if(count==0)
    {
       console.log(array[i]+" is unique element in array.");
    }
}