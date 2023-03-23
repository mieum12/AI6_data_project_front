import styled from "styled-components";
import { PRIMARY_COLOR, COLOR_WHITE } from "../../styles/color";

export const Part1 = styled.div`
background-color: ${COLOR_WHITE};
color: ${PRIMARY_COLOR};
width: 100%;
height: 800px;
text-align: center;
.title {
  font-size: 100px;
}
.text {
  font-size: 70px;
  opacity:0.6;
  padding: 50px;
}
.t1{
  padding: 20px;
  text-align: right;
  padding-right: 200px;
}
.t2 {
  padding: 20px;
  text-align: left;
  padding-left: 100px;
}
.t3 {
  padding-top: 100px;
  font-size: 40px;
}
`
export const Part2 = styled.div`
background-color: ${COLOR_WHITE};
color: ${PRIMARY_COLOR};
width: 100%;
height: 800px;
text-align: center;
.title1{
  font-size: 70px;
  text-align: left;
  padding: 30px 30px 0px 200px;
}
.title2{
  font-size: 70px;
  text-align: right;
  padding: 20px 200px 30px 30px ;
}.text {
  text-align: left;
  padding: 30px 30px 30px 200px;
  font-size: 25px;
  opacity:0.6;
}
`