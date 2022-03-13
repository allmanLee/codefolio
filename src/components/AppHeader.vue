<template>
  <header>
    <div id="appheader-bar">
      <div class="appheader-logo">
        <h1>codefolio</h1>
      </div>
      <div class="appheader-content">
        <img src="../assets/profile.svg" alt="profile-icon" />
        <button>
          <img src="../assets/icon_plus.svg" alt="plus_icon" />프로젝트 등록
        </button>
      </div>
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style>
#appheader-bar {
  height: 80px;
  background-color: black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 40px;
}
#appheader-bar .appheader-logo h1 {
  color: #fff;
  font-size: 24px;
  font-family: "Orbitron", sans-serif;
}
#appheader-bar .appheader-content {
  display: flex;
}
#appheader-bar .appheader-content img {
  width: 40px;
  height: 40px;
}
#appheader-bar .appheader-content button {
  height: 40px;
  border: 2px solid #fff;
  border-radius: 24px;
  background-color: black;
  color: #fff;
  line-height: 38px;
  padding: 0 12px;
  font-size: 12px;
  margin-left: 24px;
}
#appheader-bar .appheader-content button img {
  width: 24px;
  height: 24px;
  margin-right: 2px;
  vertical-align: middle;
}
button {
  font-family: "Pretendard-Regular", sans-serif;
}

@font-face {
  font-family: "Pretendard-Regular";
  src: url("https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff")
    format("woff");
  font-weight: 600;
  font-style: normal;
}

@import url("https://fonts.googleapis.com/css2?family=Orbitron:wght@600&display=swap");
</style>
