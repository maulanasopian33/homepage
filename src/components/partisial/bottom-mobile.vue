<template>
    <div class="sm:hidden fixed bottom-0 px-5 bg-white pb-2">
            <div class="flex">
                <div class="flex-1 group">
                    <a href="#" class="flex items-end justify-center text-center mx-auto px-4 w-full text-gray-400 group-hover:text-pink-500 border-b-2 border-transparent group-hover:border-pink-500">
                        <span class="block px-1">
                            <img class="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAACMElEQVRoge2XvW/TQBjGn3uDHMWJGGCInExZWCIs5eqzGVGnIiYqsRD+B/4JBkZGNiRWQOqCihCq0qqAXIUJZWGAzRYrSyok37E0KAWn8cc5BnE/yYvv43kf38frFzAYDJUhhBgLIcZVajSqmlgI8UAp9QTAbq/XY1EUTarQqcIAE0I8Uko9BMDOnpv9fv9KFEVvACitYjonGw6Hlm3bT5VS91Z0ednpdO5PJpNTXZraDLiu27Ys6wWAnQsFGTsgojthGH5ffu953rmVmU6nmWKj3JGmEARBt9lsHmJN8ACglNpOkuR4NBr1dGiXNuD7/iBJkiOl1FaOYdcbjcax7/vXyuqXMsA535JSfgBQJJCBlPI95/xGmRgKG+CcbxPRAYBuCf2rRPTW87xbRScoZEAIMSaifQCXiwov0QawV3RwbgNnCeoZAKuoaAqF58pjYJGgHuccVymZ7toMCUo78/m8OZvNfqzrt/ZLuq7bbrVae5sMHgBs294PgmDtGbtwBYIg6EopX+W847XBGPtIRLfDMPy2ss+qBt/3B1LK1yh2x+vkKxHtnJycfE5rTN1CJROUbgZSyiPOeeou+MOApgSlmy4RHaYlvHP1gBBizBh7DsDeWGjZsQDcdRznSxzHnxYvfxlYqqAu1RFdRhqMsV3HcU7jOH4HZMgDv/+nb5p1dcFfk1GLYgzUjbYDm7WGXaDrbP3zK2AM1I0xUDfGQN0YA3VjDNSNMWAwGAz/Nz8Bk3ie3n3ICT8AAAAASUVORK5CYII=">
                            <span class="block text-xs pb-1">Home</span>
                        </span>
                    </a>
                </div>
                <div class="flex-1 group">
                    <a href="#" class="flex items-end justify-center text-center mx-auto px-4 w-full text-gray-400 group-hover:text-pink-500 border-b-2 border-transparent group-hover:border-pink-500">
                        <span class="block px-1">
                            <img class="hover:text-pink-600" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAACMElEQVRoge2XvW/TQBjGn3uDHMWJGGCInExZWCIs5eqzGVGnIiYqsRD+B/4JBkZGNiRWQOqCihCq0qqAXIUJZWGAzRYrSyok37E0KAWn8cc5BnE/yYvv43kf38frFzAYDJUhhBgLIcZVajSqmlgI8UAp9QTAbq/XY1EUTarQqcIAE0I8Uko9BMDOnpv9fv9KFEVvACitYjonGw6Hlm3bT5VS91Z0ednpdO5PJpNTXZraDLiu27Ys6wWAnQsFGTsgojthGH5ffu953rmVmU6nmWKj3JGmEARBt9lsHmJN8ACglNpOkuR4NBr1dGiXNuD7/iBJkiOl1FaOYdcbjcax7/vXyuqXMsA535JSfgBQJJCBlPI95/xGmRgKG+CcbxPRAYBuCf2rRPTW87xbRScoZEAIMSaifQCXiwov0QawV3RwbgNnCeoZAKuoaAqF58pjYJGgHuccVymZ7toMCUo78/m8OZvNfqzrt/ZLuq7bbrVae5sMHgBs294PgmDtGbtwBYIg6EopX+W847XBGPtIRLfDMPy2ss+qBt/3B1LK1yh2x+vkKxHtnJycfE5rTN1CJROUbgZSyiPOeeou+MOApgSlmy4RHaYlvHP1gBBizBh7DsDeWGjZsQDcdRznSxzHnxYvfxlYqqAu1RFdRhqMsV3HcU7jOH4HZMgDv/+nb5p1dcFfk1GLYgzUjbYDm7WGXaDrbP3zK2AM1I0xUDfGQN0YA3VjDNSNMWAwGAz/Nz8Bk3ie3n3ICT8AAAAASUVORK5CYII=">
                            <span class="block text-xs pb-1">Explore</span>
                        </span>
                    </a>
                </div>
                <div class="flex-1 group">
                    <a href="#" class="flex items-end justify-center text-center mx-auto px-4 w-full text-gray-400 group-hover:text-pink-500 border-b-2 border-transparent group-hover:border-pink-500">
                        <span class="block px-1">
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAACMElEQVRoge2XvW/TQBjGn3uDHMWJGGCInExZWCIs5eqzGVGnIiYqsRD+B/4JBkZGNiRWQOqCihCq0qqAXIUJZWGAzRYrSyok37E0KAWn8cc5BnE/yYvv43kf38frFzAYDJUhhBgLIcZVajSqmlgI8UAp9QTAbq/XY1EUTarQqcIAE0I8Uko9BMDOnpv9fv9KFEVvACitYjonGw6Hlm3bT5VS91Z0ednpdO5PJpNTXZraDLiu27Ys6wWAnQsFGTsgojthGH5ffu953rmVmU6nmWKj3JGmEARBt9lsHmJN8ACglNpOkuR4NBr1dGiXNuD7/iBJkiOl1FaOYdcbjcax7/vXyuqXMsA535JSfgBQJJCBlPI95/xGmRgKG+CcbxPRAYBuCf2rRPTW87xbRScoZEAIMSaifQCXiwov0QawV3RwbgNnCeoZAKuoaAqF58pjYJGgHuccVymZ7toMCUo78/m8OZvNfqzrt/ZLuq7bbrVae5sMHgBs294PgmDtGbtwBYIg6EopX+W847XBGPtIRLfDMPy2ss+qBt/3B1LK1yh2x+vkKxHtnJycfE5rTN1CJROUbgZSyiPOeeou+MOApgSlmy4RHaYlvHP1gBBizBh7DsDeWGjZsQDcdRznSxzHnxYvfxlYqqAu1RFdRhqMsV3HcU7jOH4HZMgDv/+nb5p1dcFfk1GLYgzUjbYDm7WGXaDrbP3zK2AM1I0xUDfGQN0YA3VjDNSNMWAwGAz/Nz8Bk3ie3n3ICT8AAAAASUVORK5CYII=">
                            <span class="block text-xs pb-1">Search</span>
                        </span>
                    </a>
                </div>
                <div class="flex-1 group">
                    <a href="#" class="flex items-end justify-center text-center mx-auto px-4 w-full text-gray-400 group-hover:text-pink-500 border-b-2 border-transparent group-hover:border-pink-500">
                        <span class="block px-1">
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAACMElEQVRoge2XvW/TQBjGn3uDHMWJGGCInExZWCIs5eqzGVGnIiYqsRD+B/4JBkZGNiRWQOqCihCq0qqAXIUJZWGAzRYrSyok37E0KAWn8cc5BnE/yYvv43kf38frFzAYDJUhhBgLIcZVajSqmlgI8UAp9QTAbq/XY1EUTarQqcIAE0I8Uko9BMDOnpv9fv9KFEVvACitYjonGw6Hlm3bT5VS91Z0ednpdO5PJpNTXZraDLiu27Ys6wWAnQsFGTsgojthGH5ffu953rmVmU6nmWKj3JGmEARBt9lsHmJN8ACglNpOkuR4NBr1dGiXNuD7/iBJkiOl1FaOYdcbjcax7/vXyuqXMsA535JSfgBQJJCBlPI95/xGmRgKG+CcbxPRAYBuCf2rRPTW87xbRScoZEAIMSaifQCXiwov0QawV3RwbgNnCeoZAKuoaAqF58pjYJGgHuccVymZ7toMCUo78/m8OZvNfqzrt/ZLuq7bbrVae5sMHgBs294PgmDtGbtwBYIg6EopX+W847XBGPtIRLfDMPy2ss+qBt/3B1LK1yh2x+vkKxHtnJycfE5rTN1CJROUbgZSyiPOeeou+MOApgSlmy4RHaYlvHP1gBBizBh7DsDeWGjZsQDcdRznSxzHnxYvfxlYqqAu1RFdRhqMsV3HcU7jOH4HZMgDv/+nb5p1dcFfk1GLYgzUjbYDm7WGXaDrbP3zK2AM1I0xUDfGQN0YA3VjDNSNMWAwGAz/Nz8Bk3ie3n3ICT8AAAAASUVORK5CYII=">
                            <span class="block text-xs pb-1">Settings</span>
                        </span>
                    </a>
                </div>
            </div>
        </div>
</template>