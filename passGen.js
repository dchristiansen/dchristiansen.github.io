var password=document.getElementById("password");

function generateRandomPassword(length) {
    const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?';
    const password = [];
    const randomValues = new Uint32Array(length);
    window.crypto.getRandomValues(randomValues);
    for (let i = 0; i < length; i++) {
      password.push(charset[randomValues[i] % charset.length]);
    }
  
    passString = password.join('');
    document.getElementById("password").value = passString;
  }
  