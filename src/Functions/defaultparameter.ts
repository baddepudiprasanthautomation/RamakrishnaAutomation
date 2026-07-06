// default parameters -> It allows us to assign a default value to function parameter.
//                    -> default value is used when the calle does not pass an arguement


function goOutSide(footWear:string = "Paragon",season:string = "summer")
{
    console.log("going outside with "+footWear + " In Season "+ season);
}

goOutSide("Baata","summer")

goOutSide("Paragooooooooon")

goOutSide()