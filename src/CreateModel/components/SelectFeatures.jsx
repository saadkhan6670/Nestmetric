import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { inject, observer } from 'mobx-react';


class SelectFeatures extends Component {
  constructor(props) {
    super(props);
    this.store = this.props.store;
    this.state = {
      titles: [{
        name: "Learn Angular",
        category: "all",
        
      },

      {
        name: "React",
        category: "all",
       
      },

      {
        name: "Vue",
        category: "all",
       
      },
      ]
    }
  }

  componentWillMount() {
    // To keep track of ProgressBar
    this.store.pageCount = 5;
  }

  onDragStart = (ev, id) => {
    ev.dataTransfer.setData("id", id);
  }

  onDragOver = (ev) => {
    ev.preventDefault();
  }

  onDrop = (ev, cat) => {
    let id = ev.dataTransfer.getData("id");

    let titles = this.store.Features.filter((titles) => {
      if (titles.title === id) {
        titles.category = cat;
      }
      return titles;
    });
      this.store.Features = titles
  }

  OnContinue() {
    this.store.FeaturesAction()
    this.props.history.push({ pathname: '/main/module-create/wizard/select-algorithm' })
  }
  
  render() {

    var titles = {
      all: [],
      selected: [],
      targeted: [],
    }
   
    this.store.Features.forEach((t) => {
      titles[t.category].push(
        <li key={t.title}
          onDragStart={(e) => this.onDragStart(e, t.title)}
          draggable
          className="drag-item draggable">
          <div style={{ margin: "8px auto" }}>
            {t.title}
          </div>
        </li>
      );
    });

    return (
      <div >
        <h5 className="wizard-category-subtitle">Features</h5>
        <h1 className="wizard-category-title">
          Select Features
            </h1>

        <div class="drag-container">
          <ul class="drag-list">

            <li className="all"
              onDragOver={(e) => this.onDragOver(e)}
              onDrop={(e) => { this.onDrop(e, "all") }}
              class="drag-column drag-column-on-hold">
              <span class="drag-column-header">
                <h2>All Features</h2>
              </span>
              <div class="drag-options" id="options1"></div>
              <ul class="drag-inner-list" id="1">
                {titles.all}
              </ul>
            </li>

            <li className="selected"
              onDragOver={(e) => this.onDragOver(e)}
              onDrop={(e) => { this.onDrop(e, "selected") }}
              class="drag-column drag-column-in-progress">
              <span class="drag-column-header">
                <h2>Selected Features</h2>
              </span>
              <div class="drag-options" id="options2"></div>
              <ul class="drag-inner-list" id="2">
                {titles.selected}
              </ul>
            </li>

            <li className="targeted"
              onDragOver={(e) => this.onDragOver(e)}
              onDrop={(e) => { this.onDrop(e, "targeted") }}
              class="drag-column drag-column-needs-review">
              <span class="drag-column-header">
                <h2>Targeted Features</h2>
              </span>
              <div class="drag-options" id="options3"></div>
              <ul class="drag-inner-list" id="3">
                {titles.targeted}
              </ul>
            </li>

          </ul>
        </div>

        <div className="text-center margin-top-20">
          <button type="button"  onClick={() => { this.OnContinue() }} className="btn btn-primary continue" disabled="">Continue</button>
        </div>

      </div>
    )
  }
}

export default withRouter(inject('store')(observer(SelectFeatures)))