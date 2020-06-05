<template>
  <Card :bordered="false" class="content">
    <List>
      <ListItem>
        <ListItemMeta
          avatar="https://dev-file.iviewui.com/userinfoPDvn9gKWYihR24SpgC319vXY8qniCqj4/avatar"
          title="This is title"
          description="This is description, this is description."
        />
      </ListItem>
      <ListItem>
        <ListItemMeta
          avatar="https://dev-file.iviewui.com/userinfoPDvn9gKWYihR24SpgC319vXY8qniCqj4/avatar"
          title="This is title"
          description="This is description, this is description."
        />
      </ListItem>
      <ListItem>
        <ListItemMeta
          avatar="https://dev-file.iviewui.com/userinfoPDvn9gKWYihR24SpgC319vXY8qniCqj4/avatar"
          title="This is title"
          description="This is description, this is description."
        />
        <template slot="action">
          <li>
            <a href="">Edit</a>
          </li>
          <li>
            <a href="">More</a>
          </li>
        </template>
      </ListItem>
      <ListItem v-for="i in 20" :key="i">
        <ListItemMeta
          avatar="https://dev-file.iviewui.com/userinfoPDvn9gKWYihR24SpgC319vXY8qniCqj4/avatar"
          title="This is title"
          description="This is description, this is description."
        />
        <template slot="action">
          <li>
            <a href="">Edit</a>
          </li>
          <li>
            <a href="">More</a>
          </li>
        </template>
      </ListItem>
    </List>
  </Card>
</template>

<script>
export default {
  name: "tableDetail",
  data() {
    return {
  
    };
  },
  methods: {
  },
};
</script>
