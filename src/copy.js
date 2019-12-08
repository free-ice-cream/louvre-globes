import React,{ Component }  from 'react';
import './App.css';

export class EnglishLanding extends Component {

  render(){
    return (
      <div className="landing1">
        <h1>Make the snow fall</h1>
        <p>There are five Snow Globes at the museum representing a piece from our latest exhibition 10,000 Years of Luxury. Find them all</p>
      </div>
    );
  }

}
export class Landing extends Component {

  render(){
    return (
      <div className="landing1">
        <h1>{this.state.generalheading}</h1>
        <p>{this.state.generalproject}</p>
      </div>
    );
  }

}

export class ArabicLanding extends Component {

  render(){
    return (
      <div className="landing1">
        <h1>فلتجعل الثلج يتساقط! </h1>
        <p>
تتوزع خمس كرات ثلج في مختلف أنحاء المتحف، وهي عبارة عن نسخة مماثلة عن قطعة فنّية من معرضنا الحالي "10 آلاف عام من الرفاهية". ابحث عنها كلها!
</p>
      </div>
    );
  }

}
