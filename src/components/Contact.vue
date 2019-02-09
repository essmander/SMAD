<template>
  <div class="mainContainer">
    <div class="content">
      <h1>Contact</h1>
      <div class="memberDiv">
        <div v-for="value in boardMembers" :key="value">
          <div class="memberGrid">
            <img v-bind:src="value.pictureURL">
            <br>
            <b>{{value.name}}</b>
            <i>{{value.role}}</i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import gql from "graphql-tag";

export default {
  name: "Contact",
  apollo: {
    boardMembers: gql`
      {
        boardMembers {
          memberId
          name
          role
          pictureURL
        }
      }
    `
  }
};
</script>

<style scoped>
.memberGrid {
  float: left;
  color: black;
  height: 300px;
  border-color: #f0f0f0;
  border-width: 2px;
  border-style: solid;
  margin: 2px;
}

.memberGrid:hover {
  transform: scale(1.05);
}

.memberDiv {
  display: flex;
  /* align-items: center; */
  justify-content: center;
  width: 1000px;
}
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 5px;
}
.mainContainer {
    display: flex;
    justify-content: center;
}
</style>
