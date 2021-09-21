function areaOfTriangle(side1, side2, side3){
    //Find semi perimeter first
    let semiPerimeter = (0.5 * ( side1 + side2 + side3));

    //Calculate the area
    let area = Math.sqrt(semiPerimeter * (semiPerimeter-side1) * (semiPerimeter-side2) * (semiPerimeter-side3));
    return area;

}
