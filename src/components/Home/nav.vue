<template>
    <nav class="navbar navbar-default">
        <div class="container-fluid">
            <div class="navbar-header">
                <a class="navbar-brand" v-link="{ path: '/' }">My blog</a>
            </div>
            <div id="navbar" class="navbar-collapse collapse">
                <ul class="nav navbar-nav">
                    <li v-link="{ path: '/', activeClass: 'active', exact: true }" >
                        <a title="去首页">主页</a>
                    </li>
                    <li v-link="{ path: '/develop', activeClass: 'active' }"><a>开发</a></li>
                    <li v-link="{ path: '/opration', activeClass: 'active' }"><a>运维</a></li>
                    <li v-link="{ path: '/test', activeClass: 'active' }"><a>测试</a></li>
                </ul>
                <ul class="nav navbar-nav navbar-right">
                    <li class="dropdown">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                            Dropdown
                            <span class="caret"></span>
                        </a>
                        <ul class="dropdown-menu">
                            <li><a href="#">Action</a></li>
                            <li><a href="#">Another action</a></li>
                            <li><a href="#">Something else here</a></li>
                            <li role="separator" class="divider"></li>
                            <li class="dropdown-header">Nav header</li>
                            <li><a href="#">Separated link</a></li>
                            <li><a href="#">One more separated link</a></li>
                        </ul>
                    </li>
                </ul>
            </div><!--/.nav-collapse -->
        </div><!--/.container-fluid -->
    </nav>
</template>

<script>
export default {
components: {
},
}
</script>

<style>
@import '../../assets/css/nav.css';
</style>