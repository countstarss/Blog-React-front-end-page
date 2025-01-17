import React from 'react'
import Menu from '../components/Menu';
import { Link } from 'react-router-dom'

const Single = () => {
  return (
    <div className="single">
      <div className="content">
        <img src="https://img0.baidu.com/it/u=682420937,1813495166&fm=253&fmt=auto&app=120&f=JPEG?w=1280&h=800" alt="" />
        <div className="user">
          <img src="https://img2.baidu.com/it/u=2214388039,2430684729&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=889" alt="" />
          <div className="info">
            <span>John</span>
            <p>Post 3 days ago</p>
          </div>
          <div className="edit">
            <Link className="link" to="/write/edit=2"><span className='edit-edit'></span></Link>
            <Link className='link' to="/write/edit=1"><span className='edit-delete'></span></Link>
          </div>
        </div>
        <h1>这些高低错落的小院子，涂着厚厚黄土的墙，低矮的木门。有女子在晾晒衣服，再远处，溪水边</h1>
        <p>路上只我一个人，背着手踱着。这一片天地好像是我的;我也像超出了平常旳自己，到了另一世界里。我爱热闹，也爱冷静;爱群居，也爱独处。像今晚上，一个人在这苍茫旳月下，什么都可以想，什么都可以不想，便觉是个自由的人。白天里一定要做的事，一定要说的话，现在都可不理。这是独处的妙处，我且受用这无边的荷香月色好了。
        <p>曲曲折折的荷塘上面，弥望旳是田田的叶子。叶子出水很高，像亭亭旳舞女旳裙。层层的叶子中间，零星地点缀着些白花，有袅娜(niǎo,nuó)地开着旳，有羞涩地打着朵儿旳;正如一粒粒的明珠，又如碧天里的星星，又如刚出浴的美人。微风过处，送来缕缕清香，仿佛远处高楼上渺茫的歌声似的。这时候叶子与花也有一丝的颤动，像闪电般，霎时传过荷塘的那边去了。叶子本是肩并肩密密地挨着，这便宛然有了一道凝碧的波痕。叶子底下是脉脉(mò)的流水，遮住了，不能见一些颜色;而叶子却更见风致了。</p>
        <p>月光如流水一般，静静地泻在这一片叶子和花上。薄薄的青雾浮起在荷塘里。叶子和花仿佛在牛乳中洗过一样;又像笼着轻纱的梦。虽然是满月，天上却有一层淡淡的云，所以不能朗照;但我以为这恰是到了好处——酣眠固不可少，小睡也别有风味的。月光是隔了树照过来的，高处丛生的灌木，落下参差的斑驳的黑影，峭楞楞如鬼一般;弯弯的杨柳的稀疏的倩影，却又像是画在荷叶上。塘中的月色并不均匀;但光与影有着和谐的旋律，如梵婀(ē)玲(英语violin小提琴的译音)上奏着的名曲。</p>
        <p>荷塘的四面，远远近近，高高低低都是树，而杨柳最多。这些树将一片荷塘重重围住;只在小路一旁，漏着几段空隙，像是特为月光留下的。树色一例是阴阴的，乍看像一团烟雾;但杨柳的丰姿，便在烟雾里也辨得出。树梢上隐隐约约的是一带远山，只有些大意罢了。树缝里也漏着一两点路灯光，没精打采的，是渴睡人的眼。这时候最热闹的，要数树上的蝉声与水里的蛙声;但热闹是它们的，我什么也没有。</p></p>
      </div>
      <Menu />
    </div>
  );
}

export default Single