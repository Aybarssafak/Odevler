document.addEventListener('DOMContentLoaded', () => {
    fetch('/kisiler')
      .then(response => response.json())
      .then(data => {
        const kisiListesi = document.getElementById('kişi-listesi');
        data.forEach(kisi => {
          const li = document.createElement('li');
          li.textContent = `${kisi.fullname} - ${kisi.tel} - ${kisi.password}`;
          kisiListesi.appendChild(li);

          const deleteBtn = document.createElement('button');
          deleteBtn.textContent = 'Sil';
          deleteBtn.onclick = () => {
            fetch('/sil-kisi', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
              },
              body: `id=${kisi.id}`
            }).then(() => {
                kisiListesi.removeChild(li);
            })
          };
          li.appendChild(deleteBtn);


        const updateBtn = document.createElement('button');
        updateBtn.textContent = 'Güncelle';
        updateBtn.onclick = () => {
          const yeniFullname = prompt('Yeni isim:', kisi.fullname);
          const yeniTel = prompt('Yeni telefon numarası:', kisi.tel);
          const yeniPassword = prompt('Yeni şifre:', kisi.password);
          
          if (yeniFullname && yeniTel && yeniPassword) {
            fetch('/kisi-guncelle', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
              },
              body: `id=${kisi.id}&yeniFullname=${(yeniFullname)}&yeniTel=${(yeniTel)}&yeniPassword=${(yeniPassword)}`
            }).then(response => {
              li.textContent = `${yeniFullname} - ${yeniTel} - ${yeniPassword}`;
              li.appendChild(deleteBtn);
              li.appendChild(updateBtn);
            })
          }
        };
        li.appendChild(updateBtn);
        });
      });
  });
  