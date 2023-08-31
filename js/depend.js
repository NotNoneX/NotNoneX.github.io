fetch('https://v1.hitokoto.cn')
    .then(response => response.json())
    .then(data => {
        const hitokoto = document.getElementById('hitokoto')
        hitokoto.innerText = data.hitokoto + '\n---' + data.from
    })

fetch('https://cdn.jsdelivr.net/gh/NotNoneX/NotNoneX.github.io@master/config/settings.json')
    .then(response => response.json())
    .then(data => {
        
        const fav = document.querySelector('head > link:nth-child(8)')
        const myself = document.querySelector('#box > div.meBox > div.meBox-title > p');
        const motto1 = document.querySelector('.meBox-text>p:nth-child(1)');
        const motto2 = document.querySelector('.meBox-text>p:nth-child(2)');
        const motto3 = document.querySelector('.meBox-text>p:nth-child(3)');
        const link1 = document.querySelector('#box > div.meBox > div.meBox-Button > a:nth-child(1)');
        const link2 = document.querySelector('#box > div.meBox > div.meBox-Button > a:nth-child(2)');
        const name = document.querySelector('#cmdBox > div:nth-child(1) > div.cmdText > p:nth-child(5)')
        const sex = document.querySelector('#cmdBox > div:nth-child(1) > div.cmdText > p:nth-child(6)')
        const addr = document.querySelector('#cmdBox > div:nth-child(1) > div.cmdText > p:nth-child(8)')
        const status1 = document.querySelector('#cmdBox > div:nth-child(1) > div.cmdText > li:nth-child(13)');
        const status2 = document.querySelector('#cmdBox > div:nth-child(1) > div.cmdText > li:nth-child(14)');
        const site1 = document.querySelector('#cmdBox > div.cmd.cmd2 > div.cmdText > ul > li:nth-child(1) > a')
        const site2 = document.querySelector('#cmdBox > div.cmd.cmd2 > div.cmdText > ul > li:nth-child(2) > a')

        document.title = data.base.tit;
        fav.href = data.base.fav;
        myself.innerText = data.am.self;
        motto1.innerText = data.motto.nnx1;
        motto2.innerText = data.motto.nnx2;
        motto3.innerText = data.motto.nnx3;
        link1.innerText = data.am.links.link1[0];
        link1.href = data.am.links.link1[1];
        link2.innerText = data.am.links.link2[0];
        link2.href = data.am.links.link2[1];
        name.innerText = data.am.about.nickname;
        sex.innerText = data.am.about.sex;
        addr.innerText = data.am.about.addr;
        status1.innerText = data.status.rc1;
        status2.innerText = data.status.rc2;
        site1.innerText = data.sites.site1[0];
        site1.href = data.sites.site1[1];
        site2.innerText = data.sites.site2[0];
        site2.href = data.sites.site2[1];


        const birth = data.am.about.birth;
        const nowYear = new Date().getFullYear();
        const age = nowYear - birth;
        const ageText = "年龄：" + age + "岁";
        document.getElementById("showage").innerText = ageText;
        document.getElementById("cop").innerText = "Copyrights © " + data.base.start_time + " - " + nowYear + " · By " + data.am.footcop;
    })
    .catch(error => {
        console.error('发生错误:', error);
        // 处理错误情况
    });