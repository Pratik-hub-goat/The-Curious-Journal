/* THE CURIOUS JOURNAL — Phase 2 archive interactions
   Save this file as blog.js (remove the .txt extension in Spck if needed). */
(() => {
  "use strict";
  const stories = [
    {id:1,title:"The Quiet Art of Paying Attention",category:"Slow Living",date:"2026-10-12",read:"5 min read",featured:true,excerpt:"A small invitation to notice the details that make an ordinary day feel extraordinary.",palette:["#ead9c4","#bd765d","#71816c"]},
    {id:2,title:"Making Space for Better Ideas",category:"Creativity",date:"2026-10-08",read:"4 min read",featured:true,excerpt:"Why a little breathing room can help your most interesting thoughts find their way in.",palette:["#e8d9cb","#b65d45","#e7b08c"]},
    {id:3,title:"A More Human Kind of Technology",category:"Technology",date:"2026-10-03",read:"6 min read",featured:true,excerpt:"Looking beyond the latest features to ask how our tools can better serve real life.",palette:["#dce2d5","#657b68","#d7b18b"]},
    {id:4,title:"Objects That Hold Our Stories",category:"Culture",date:"2026-09-28",read:"5 min read",featured:false,excerpt:"The everyday things we keep can become quiet reminders of people, places, and time.",palette:["#e8d8c5","#c18a5e","#8c5946"]},
    {id:5,title:"The Joy of Starting Small",category:"Creativity",date:"2026-09-22",read:"3 min read",featured:false,excerpt:"Big ambitions are easier to live with when we give them a tiny first step.",palette:["#e6dfcf","#d18463","#687d67"]},
    {id:6,title:"Can We Make the Internet Feel Smaller?",category:"Technology",date:"2026-09-16",read:"7 min read",featured:false,excerpt:"Finding calmer corners of the web and building a more intentional digital routine.",palette:["#d8e0db","#6d8c82","#c4785e"]},
    {id:7,title:"A Field Guide to Unhurried Mornings",category:"Slow Living",date:"2026-09-09",read:"4 min read",featured:false,excerpt:"There is no perfect morning routine—only small rituals that make a day feel like yours.",palette:["#eddfc9","#bd8e5c","#8d9a7d"]},
    {id:8,title:"Why Independent Magazines Still Matter",category:"Culture",date:"2026-09-02",read:"6 min read",featured:false,excerpt:"In a fast-moving feed, thoughtful publishing makes room for ideas with a longer life.",palette:["#e6d9d0","#a75d4a","#74836d"]},
    {id:9,title:"Collecting Moments, Not Milestones",category:"Slow Living",date:"2026-08-26",read:"4 min read",featured:false,excerpt:"A gentle reminder that a life is also made of small, unannounced moments.",palette:["#e6dfcf","#d49c76","#72816a"]},
    {id:10,title:"The Creative Value of Being a Beginner",category:"Creativity",date:"2026-08-19",read:"5 min read",featured:false,excerpt:"Starting from zero can be freeing: curiosity gets to lead before perfection does.",palette:["#e7d7c5","#bf7153","#778b7c"]},
    {id:11,title:"Designing a More Thoughtful Digital Day",category:"Technology",date:"2026-08-12",read:"5 min read",featured:false,excerpt:"Small choices about notifications and attention can change how technology feels.",palette:["#dce2d5","#6f8875","#c67d5d"]},
    {id:12,title:"The Places That Change How We Think",category:"Culture",date:"2026-08-05",read:"6 min read",featured:false,excerpt:"From a library corner to a busy market, our surroundings quietly shape our ideas.",palette:["#eadcc9","#b77855","#697d68"]}
  ];
  const grid=document.getElementById("storyGrid");
  if(!grid)return;
  const search=document.getElementById("storySearch"),sort=document.getElementById("storySort");
  const filters=document.getElementById("topicFilters"),count=document.getElementById("resultCount");
  const pagination=document.getElementById("pagination"),empty=document.getElementById("emptyState");
  const clear=document.getElementById("clearFilters"),pageSize=6;
  let topic="All",page=1;
  const dateOf=s=>new Date(`${s}T12:00:00`);
  const prettyDate=s=>dateOf(s).toLocaleDateString("en",{month:"short",day:"numeric",year:"numeric"});

  function getStories(){
    const q=(search?.value||"").trim().toLowerCase();
    const result=stories.filter(s=>(topic==="All"||s.category===topic)&&`${s.title} ${s.category} ${s.excerpt}`.toLowerCase().includes(q));
    if(sort?.value==="newest")result.sort((a,b)=>dateOf(b.date)-dateOf(a.date));
    else if(sort?.value==="az")result.sort((a,b)=>a.title.localeCompare(b.title));
    else result.sort((a,b)=>Number(b.featured)-Number(a.featured)||dateOf(b.date)-dateOf(a.date));
    return result;
  }
  function makeCard(s,i){
    const card=document.createElement("article");card.className="story-card";card.style.setProperty("--delay",`${Math.min(i,5)*65}ms`);
    const link=document.createElement("a");link.className="story-card-link";link.href=`article.html?id=${encodeURIComponent(s.id)}`;link.setAttribute("aria-label",`Read ${s.title}`);
    const visual=document.createElement("span");visual.className="story-visual";visual.style.setProperty("--art-bg",s.palette[0]);visual.style.setProperty("--shape-a",s.palette[1]);visual.style.setProperty("--shape-b",s.palette[2]);visual.setAttribute("aria-hidden","true");
    const label=document.createElement("span");label.className="visual-label";label.textContent=s.category;visual.appendChild(label);
    ["visual-orb","visual-ring","visual-block","visual-line"].forEach(c=>{const sh=document.createElement("span");sh.className=`visual-shape ${c}`;visual.appendChild(sh);});
    const copy=document.createElement("span");copy.className="story-card-copy";
    const meta=document.createElement("span");meta.className="story-meta";
    const cat=document.createElement("span");cat.textContent=s.category;
    const dot=document.createElement("span");dot.className="meta-dot";dot.setAttribute("aria-hidden","true");
    const time=document.createElement("time");time.dateTime=s.date;time.textContent=prettyDate(s.date);meta.append(cat,dot,time);
    const title=document.createElement("span");title.className="story-title";title.textContent=s.title;
    const excerpt=document.createElement("span");excerpt.className="story-excerpt";excerpt.textContent=s.excerpt;
    const read=document.createElement("span");read.className="story-read";read.append(document.createTextNode(`Read story · ${s.read} `));
    const arrow=document.createElement("span");arrow.textContent="↗";arrow.setAttribute("aria-hidden","true");read.appendChild(arrow);
    copy.append(meta,title,excerpt,read);link.append(visual,copy);card.appendChild(link);return card;
  }
  function pageButton(label,target,disabled=false,current=false){
    const b=document.createElement("button");b.type="button";b.className="page-button";b.textContent=label;b.disabled=disabled;
    if(current)b.setAttribute("aria-current","page");
    b.addEventListener("click",()=>{page=target;render();document.getElementById("storyArchive")?.scrollIntoView({behavior:"smooth",block:"start"});});
    return b;
  }
  function render(){
    const result=getStories(),pages=Math.max(1,Math.ceil(result.length/pageSize));page=Math.min(page,pages);
    const visible=result.slice((page-1)*pageSize,page*pageSize);grid.replaceChildren();
    visible.forEach((s,i)=>grid.appendChild(makeCard(s,i)));
    grid.setAttribute("aria-busy","false");empty.hidden=result.length>0;grid.hidden=result.length===0;pagination.hidden=result.length===0;
    count.textContent=`${result.length} ${result.length===1?"story":"stories"} to explore`;pagination.replaceChildren();
    if(pages>1){
      pagination.appendChild(pageButton("←",Math.max(1,page-1),page===1));
      for(let n=1;n<=pages;n++)pagination.appendChild(pageButton(String(n),n,false,n===page));
      pagination.appendChild(pageButton("→",Math.min(pages,page+1),page===pages));
    }
  }
  search?.addEventListener("input",()=>{page=1;render();});
  sort?.addEventListener("change",()=>{page=1;render();});
  filters?.addEventListener("click",e=>{
    const b=e.target.closest("button[data-topic]");if(!b)return;topic=b.dataset.topic||"All";
    filters.querySelectorAll("button[data-topic]").forEach(chip=>{const active=chip===b;chip.classList.toggle("is-active",active);chip.setAttribute("aria-pressed",String(active));});
    page=1;render();
  });
  clear?.addEventListener("click",()=>{
    if(search)search.value="";topic="All";if(sort)sort.value="featured";
    filters?.querySelectorAll("button[data-topic]").forEach(chip=>{const active=chip.dataset.topic==="All";chip.classList.toggle("is-active",active);chip.setAttribute("aria-pressed",String(active));});
    page=1;render();search?.focus();
  });
  document.addEventListener("keydown",e=>{
    const t=e.target,typing=t instanceof HTMLElement&&(t.isContentEditable||["INPUT","TEXTAREA","SELECT"].includes(t.tagName));
    if(e.key==="/"&&!typing&&search){e.preventDefault();search.focus();}
    if(e.key==="Escape"&&document.activeElement===search){search.value="";page=1;render();search.blur();}
  });
  // Demo only: this form validates but does not send or save an email address.
  const form=document.getElementById("newsletter"),email=document.getElementById("email"),feedback=document.getElementById("feedback");
  form?.addEventListener("submit",e=>{
    e.preventDefault();if(!email||!feedback)return;
    if(!email.validity.valid||!email.value.trim()){feedback.textContent="Please enter a valid email address.";feedback.style.color="#a13f2d";email.focus();return;}
    feedback.textContent="Thanks! This is a demo form, so no email was sent or saved.";feedback.style.color="#536b50";form.reset();
  });
  // Mobile menu fallback; safely does nothing if these controls are absent.
  const toggle=document.getElementById("menuToggle"),nav=document.getElementById("nav");
  toggle?.addEventListener("click",()=>{
    const open=toggle.getAttribute("aria-expanded")!=="true";toggle.setAttribute("aria-expanded",String(open));
    toggle.setAttribute("aria-label",open?"Close navigation":"Open navigation");nav?.classList.toggle("is-open",open);
  });
  nav?.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>{nav.classList.remove("is-open");toggle?.setAttribute("aria-expanded","false");toggle?.setAttribute("aria-label","Open navigation");}));
  const year=document.getElementById("year");if(year)year.textContent=String(new Date().getFullYear());
  render();
})();
