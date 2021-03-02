<template>
  <div class="user-container">
    <div class="user-name">
      <h3>joselito antonio</h3>
    </div>
    <div class="user-image">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/e/e8/Chris_Hemsworth_by_Gage_Skidmore_2_%28cropped%29.jpg"
        alt=""
      />
    </div>
  </div>
</template>

<style>
.user-container {
  width: 300px;
  background-color: red;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.user-image {
}
.user-image img {
  border-radius: 50px;
  height: 50px;
  width: 50px;
  object-fit: cover;
}
</style>
