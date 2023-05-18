import React from 'react';
import './Home.css';
import { useGlobalContext } from '../Context/context';

const Home = () => {

    const {data, isLoading} = useGlobalContext();
    //console.log(data)

    if(isLoading){
        return (
            <h1>Loading....</h1>
        )
    }

    const arr = new Array(80).fill('X');
    data?.map((seat) => {
        (seat.status==='Booked') ? arr[seat.seatNumber-1]='B' : arr[seat.seatNumber-1]='E'
    })

    //console.log(arr);
    

    const Cell = ({id}) => {
        
        return (
            <td>
                <div className="box">
                    <p className='contain'  > {arr[id-1] || 'X'}  </p>
                    {id}
                </div>
            </td>
        )
    }

  return (
    <div className='container'>
        {/* {
            data?.map((seat) => {
               return (
                <Cell data = {seat } />
               )
            })
        } */}
       
        <table>
            <tbody>
                <tr>
                    <Cell id={1} />
                    <Cell id={2} />
                    <Cell id={3} />
                    <Cell id={4} />
                    <Cell id={5} />
                    <Cell id={6} />
                    <Cell id={7} />
                </tr>
                <tr>
                    <Cell id={8} />
                    <Cell id={9} />
                    <Cell id={10} />
                    <Cell id={11} />
                    <Cell id={12} />
                    <Cell id={13} />
                    <Cell id={14} />
                </tr>
                <tr>
                    <Cell id={15} />
                    <Cell id={16} />
                    <Cell id={17} />
                    <Cell id={18} />
                    <Cell id={19} />
                    <Cell id={20} />
                    <Cell id={21} />
                </tr>
                <tr>
                    <Cell id={22} />
                    <Cell id={23} />
                    <Cell id={24} />
                    <Cell id={25} />
                    <Cell id={26} />
                    <Cell id={27} />
                    <Cell id={28} />
                </tr>
                <tr>
                    <Cell id={29} />
                    <Cell id={30} />
                    <Cell id={31} />
                    <Cell id={32} />
                    <Cell id={33} />
                    <Cell id={34} />
                    <Cell id={35} />
                </tr>
                <tr>
                    <Cell id={36} />
                    <Cell id={37} />
                    <Cell id={38} />
                    <Cell id={39} />
                    <Cell id={40} />
                    <Cell id={41} />
                    <Cell id={42} />
                </tr>
                <tr>
                    <Cell id={43} />
                    <Cell id={44} />
                    <Cell id={45} />
                    <Cell id={46} />
                    <Cell id={47} />
                    <Cell id={48} />
                    <Cell id={49} />
                </tr>
                <tr>
                    <Cell id={50} />
                    <Cell id={51} />
                    <Cell id={52} />
                    <Cell id={53} />
                    <Cell id={54} />
                    <Cell id={55} />
                    <Cell id={56} />
                </tr>
                <tr>
                    <Cell id={57} />
                    <Cell id={58} />
                    <Cell id={59} />
                    <Cell id={60} />
                    <Cell id={61} />
                    <Cell id={62} />
                    <Cell id={63} />
                </tr>
                <tr>
                    <Cell id={64} />
                    <Cell id={65} />
                    <Cell id={66} />
                    <Cell id={67} />
                    <Cell id={68} />
                    <Cell id={69} />
                    <Cell id={70} />
                </tr>
                <tr>
                    <Cell id={71} />
                    <Cell id={72} />
                    <Cell id={73} />
                    <Cell id={74} />
                    <Cell id={75} />
                    <Cell id={76} />
                    <Cell id={77} />
                </tr>
                <tr>
                    <Cell id={78} />
                    <Cell id={79} />
                    <Cell id={80} />
                    <Cell />
                    <Cell />
                    <Cell />
                    <Cell />
                </tr>
            </tbody>
        </table>
      
    </div>
  )
}


export default Home
